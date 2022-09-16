import {takeScreenshot, reload} from 'react-native-owl';

describe('App.tsx', () => {
  beforeAll(async () => {
    await reload();
  });

  it('takes a screenshot of the first screen', async () => {
    const screen = await takeScreenshot('homescreen');

    expect(screen).toMatchBaseline();
  });
});
