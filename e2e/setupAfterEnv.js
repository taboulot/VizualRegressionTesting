const {configureToMatchImageSnapshot} = require('jest-image-snapshot');
const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');
const {device} = require('detox');
const {expect} = require('@jest/globals');

const toMatchImage = configureToMatchImageSnapshot({
  comparisonMethod: 'ssim',
  failureThreshold: 0.002,
  failureThresholdType: 'percent',
});

expect.extend({toMatchImage});

expect.extend({
  // @ts-ignore
  async toMatchImageSnapshot(screenName) {
    const platform = await device.getPlatform();
    const regex = /\((.*)\)/g;
    const deviceType = await device.name.match(regex)[0];

    const SNAPSHOTS_DIR = `__image_snapshots__/${platform}/${deviceType}`;

    const {testPath, currentTestName} = this;

    const customSnapshotsDir = path.join(path.dirname(testPath), SNAPSHOTS_DIR);
    const customSnapshotIdentifier = kebabCase(
      `${path.basename(testPath)}-${currentTestName}-${screenName}`,
    );

    const tempPath = await device.takeScreenshot(screenName);
    const image = fs.readFileSync(tempPath);
    // @ts-ignore
    expect(image).toMatchImage({
      customSnapshotIdentifier,
      customSnapshotsDir,
    });

    return {pass: true};
  },
});
