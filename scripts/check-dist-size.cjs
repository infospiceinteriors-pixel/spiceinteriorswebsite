/**
 * Fails deploy if dist/ exceeds the Hosting storage budget per release.
 * Usage: node scripts/check-dist-size.cjs [maxMegabytes]
 */

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const maxMegabytes = Number(process.argv[2] ?? 300);

function getDirectorySizeBytes(dir) {
  let total = 0;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += getDirectorySizeBytes(entryPath);
      continue;
    }
    total += fs.statSync(entryPath).size;
  }

  return total;
}

if (!fs.existsSync(distDir)) {
  console.error(`dist/ not found at ${distDir}. Run npm run build first.`);
  process.exit(1);
}

const sizeBytes = getDirectorySizeBytes(distDir);
const sizeMegabytes = sizeBytes / 1024 / 1024;

console.log(`dist/ size: ${sizeMegabytes.toFixed(1)} MB (limit: ${maxMegabytes} MB)`);

if (sizeMegabytes > maxMegabytes) {
  console.error(
    'Deploy blocked: dist/ is too large for the free Hosting storage budget.',
  );
  console.error('Remove unused assets from public/ or compress large images.');
  process.exit(1);
}
