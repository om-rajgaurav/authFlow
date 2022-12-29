import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/redux/index';
import {Initial} from './src/redux/actions';

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
