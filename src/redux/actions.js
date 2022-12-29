import {Types} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {LOG_IN, LOG_OUT} = Types;

export const Initial = () => {
  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    console.log('token restored');
    if (token != null) {
      dispatch({
        type: LOG_IN,
        payload: token,
      });
    }
  };
};
export const login = (userName, password) => {
  return async dispatch => {
    const token = userName + password;
    await AsyncStorage.setItem('token', token);
    console.log('token stored');
    dispatch({
      type: LOG_IN,
      payload: token,
    });
  };
};

export const logout = value => {
  return async dispatch => {
    await AsyncStorage.getAllKeys().then(keys => {
      let fData = keys.filter(data => data != 'alreadyLaunched');
      console.log(fData);
      AsyncStorage.multiRemove(fData);
    });
    dispatch({
      type: LOG_OUT,
      payload: value,
    });
  };
};
