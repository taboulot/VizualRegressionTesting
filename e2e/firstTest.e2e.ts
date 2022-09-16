import {device, by} from 'detox';
import {expect as jestExpect} from '@jest/globals';

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
    // @ts-ignore
    await jestExpect('homepage').toMatchImageSnapshot();
  });
});
