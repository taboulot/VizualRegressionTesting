import React, {useState} from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const PressPage = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [testPress, setTestPress] = useState(false);
  const [testLongPress, setTestLongPress] = useState(false);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
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
    </View>
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

export {PressPage};
