import {device, element, by} from 'detox';
import {expect as jestExpect} from '@jest/globals';
import {setDemoMode} from '../utils.jest';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
    await setDemoMode();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have test press text', async () => {
    // @ts-ignore
    await jestExpect('homepage').toMatchImageSnapshot();
  });

  it('display Button pressed text when user click on Test press button', async () => {
    await element(by.text('PRESS PAGE')).tap();
    await element(by.text('TEST PRESS')).tap();
    // @ts-ignorexx
    await jestExpect('button-pressed').toMatchImageSnapshot();
  });

  it('display Button long pressed text when user click on long press button', async () => {
    await element(by.text('PRESS PAGE')).tap();
    await element(by.id('testLongPress')).longPress();
    // @ts-ignorexx
    await jestExpect('button-long-pressed').toMatchImageSnapshot();
  });
});
