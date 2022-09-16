import React from 'react';
import {Button, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const WelcomePage = () => {
  const {navigate} = useNavigation();

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <Button
        title="PRESS PAGE"
        testID="pressPage"
        onPress={() => {
          // @ts-ignore
          navigate('PressPage');
        }}
      />
    </View>
  );
};

export {WelcomePage};
