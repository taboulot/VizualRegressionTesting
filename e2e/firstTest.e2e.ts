import {device, element, by} from 'detox';
import {expect as jestExpect} from '@jest/globals';
import {execSync} from 'child_process';

async function setDemoMode() {
  if (device.getPlatform() === 'ios') {
    execSync(
      'xcrun simctl status_bar "iPhone 13" override --time "12:00" --batteryState charged --batteryLevel 100 --wifiBars 3 --cellularMode active --cellularBars 4',
    );
  } else {
    // enter demo mode
    execSync('adb shell settings put global sysui_demo_allowed 1');
    // display time 12:00
    execSync(
      'adb shell am broadcast -a com.android.systemui.demo -e command clock -e hhmm 1200',
    );
    // Display full mobile data with 4g type and no wifi
    execSync(
      'adb shell am broadcast -a com.android.systemui.demo -e command network -e mobile show -e level 4 -e datatype 4g -e wifi false',
    );
    // Hide notifications
    execSync(
      'adb shell am broadcast -a com.android.systemui.demo -e command notifications -e visible false',
    );
    // Show full battery but not in charging state
    execSync(
      'adb shell am broadcast -a com.android.systemui.demo -e command battery -e plugged false -e level 100',
    );
  }
}

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
