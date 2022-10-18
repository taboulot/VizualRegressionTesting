import {takeScreenshot, reload} from 'react-native-owl';
import {setDemoMode} from '../utils.jest';

describe('App.tsx', () => {
  beforeAll(async () => {
    await reload();
    await setDemoMode();
  });

  it('takes a screenshot of the first screen', async () => {
    const screen = await takeScreenshot('homescreen');

    expect(screen).toMatchBaseline();
  });
});
