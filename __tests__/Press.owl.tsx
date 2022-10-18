import {takeScreenshot, press, reload} from 'react-native-owl';
import {setDemoMode} from '../utils.jest';

describe('App.tsx', () => {
  beforeAll(async () => {
    await reload();
    await setDemoMode();
  });

  it('display Button pressed text when user click on Test press button', async () => {
    await press('pressPage');
    await press('testPress');

    const screen = await takeScreenshot('after-button-press');

    expect(screen).toMatchBaseline();
  });
});
