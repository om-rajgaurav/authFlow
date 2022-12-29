import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SplashScreen} from '../screens';
import {useDispatch, useSelector} from 'react-redux';
import {Initial} from '../redux/actions';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const loggedIn = useSelector(state => state.AuthReducer.authToken);

  const dispatch = useDispatch();

  const init = () => {
    dispatch(Initial());
  };
  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {loggedIn !== null ? (
        <Stack.Screen name="app" component={AppStack} />
      ) : (
        <Stack.Screen name="auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
