/**
 * Compresses large portfolio JPEGs to WebP for Firebase Hosting.
 * Usage: node scripts/compress-portfolio-images.mjs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, '..', 'public');
const archiveDir = path.join(__dirname, '..', 'assets-archive', 'originals');

const patterns = [/^vault-.*\.jpg$/i, /^perrinial-.*\.jpg$/i];
const maxWidth = 1920;
const webpQuality = 80;

fs.mkdirSync(archiveDir, { recursive: true });

const files = fs
  .readdirSync(publicDir)
  .filter((file) => patterns.some((pattern) => pattern.test(file)));

let beforeBytes = 0;
let afterBytes = 0;

for (const file of files) {
  const inputPath = path.join(publicDir, file);
  const outputName = file.replace(/\.jpg$/i, '.webp');
  const outputPath = path.join(publicDir, outputName);
  const archivePath = path.join(archiveDir, file);

  const inputStats = fs.statSync(inputPath);
  beforeBytes += inputStats.size;

  fs.copyFileSync(inputPath, archivePath);

  await sharp(inputPath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: webpQuality })
    .toFile(outputPath);

  fs.unlinkSync(inputPath);

  afterBytes += fs.statSync(outputPath).size;
  console.log(
    `${file} -> ${outputName} (${(inputStats.size / 1024 / 1024).toFixed(2)} MB -> ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB)`,
  );
}

console.log(
  `\nTotal: ${(beforeBytes / 1024 / 1024).toFixed(1)} MB -> ${(afterBytes / 1024 / 1024).toFixed(1)} MB`,
);
