import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {logout} from '../redux/actions';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(logout(null));
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logOutHandler} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5aa3e7',
  },
});
