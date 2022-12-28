import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Navigation from '../navigation/Navigation';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
