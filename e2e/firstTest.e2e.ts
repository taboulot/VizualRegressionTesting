import {device, by} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    // @ts-ignore
    await expect(element(by.text('Step One'))).toBeVisible();
  });
});
