/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [testPress, setTestPress] = useState(false);
  const [testLongPress, setTestLongPress] = useState(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        title="TEST PRESS"
        testID="testPress"
        onPress={() => {
          setTestPress(prev => !prev);
        }}
      />
      <TouchableHighlight
        testID="testLongPress"
        style={styles.longPress}
        onLongPress={() => {
          setTestLongPress(prev => !prev);
        }}>
        <Text style={styles.longPressText}>LONG PRESS</Text>
      </TouchableHighlight>
      {testPress ? <Text>Button pressed</Text> : null}
      {testLongPress ? <Text>Button long pressed</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  longPress: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    backgroundColor: 'rgb(33,150,243)',
  },
  longPressText: {
    color: 'white',
  },
});

export default App;
