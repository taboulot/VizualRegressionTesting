import {takeScreenshot, press, reload} from 'react-native-owl';

describe('App.tsx', () => {
  beforeAll(async () => {
    await reload();
  });

  it('display Button pressed text when user click on Test press button', async () => {
    await press('testPress');
    const screen = await takeScreenshot('after-button-press');

    expect(screen).toMatchBaseline();
  });
});
