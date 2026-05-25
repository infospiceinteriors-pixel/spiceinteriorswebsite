/**
 * Sets Firebase Hosting release retention to limit stored deploy history.
 * Requires an authenticated Firebase CLI session (`firebase login`).
 *
 * Usage: node scripts/configure-hosting-storage.cjs
 */

const path = require('path');
const os = require('os');

const FIREBASE_TOOLS_ROOT = path.join(
  os.homedir(),
  'AppData',
  'Roaming',
  'npm',
  'node_modules',
  'firebase-tools',
);

const { Client, setRefreshToken } = require(path.join(FIREBASE_TOOLS_ROOT, 'lib', 'apiv2'));
const { hostingApiOrigin } = require(path.join(FIREBASE_TOOLS_ROOT, 'lib', 'api'));
const { listChannels, listSites } = require(path.join(
  FIREBASE_TOOLS_ROOT,
  'lib',
  'hosting',
  'api',
));
const { configstore } = require(path.join(FIREBASE_TOOLS_ROOT, 'lib', 'configstore'));
const { requireAuth } = require(path.join(FIREBASE_TOOLS_ROOT, 'lib', 'requireAuth'));

const PROJECT_ID = 'wardrob-f6c7c';
const RETAINED_RELEASE_COUNT = 3;

const apiClient = new Client({
  urlPrefix: hostingApiOrigin(),
  apiVersion: 'v1beta1',
  auth: true,
});

async function initAuth() {
  const user = configstore.get('user');
  const tokens = configstore.get('tokens');

  if (!user || !tokens?.refresh_token) {
    throw new Error('Run `firebase login` before configuring Hosting storage.');
  }

  setRefreshToken(tokens.refresh_token);
  await requireAuth({ user, tokens, project: PROJECT_ID });
}

async function setChannelRetention(siteId) {
  const before = await listChannels(PROJECT_ID, siteId);
  const live = before.find((channel) => channel.name.endsWith('/live'));
  const previous = live?.retainedReleaseCount ?? 'unknown';

  const response = await apiClient.patch(
    `/projects/${PROJECT_ID}/sites/${siteId}/channels/live`,
    { retainedReleaseCount: RETAINED_RELEASE_COUNT },
    { queryParams: { updateMask: 'retainedReleaseCount' } },
  );

  console.log(
    `${siteId}: retainedReleaseCount ${previous} -> ${response.body.retainedReleaseCount}`,
  );
  console.log('  Excess release content will be scheduled for deletion within 24 hours.');
}

async function main() {
  await initAuth();

  const sites = await listSites(PROJECT_ID);
  if (!sites.length) {
    throw new Error(`No Hosting sites found for project ${PROJECT_ID}`);
  }

  console.log(`Project: ${PROJECT_ID}`);
  console.log(`Setting live-channel retention to ${RETAINED_RELEASE_COUNT} releases...\n`);

  for (const site of sites) {
    const siteId = site.name.split('/').pop();
    await setChannelRetention(siteId);
  }

  console.log('\nDone. Check usage in Firebase Console -> Hosting -> Usage within 24 hours.');
}

main().catch((error) => {
  console.error('Failed to configure Hosting storage:', error.message || error);
  process.exit(1);
});
