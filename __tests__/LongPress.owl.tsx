import {takeScreenshot, longPress, reload, press} from 'react-native-owl';

describe('LongPress', () => {
  beforeAll(async () => {
    await reload();
  });

  it('display Button long pressed text when user click on long press button', async () => {
    await press('pressPage');
    await longPress('testLongPress');

    const screen = await takeScreenshot('after-long-button-press');

    expect(screen).toMatchBaseline();
  });
});
