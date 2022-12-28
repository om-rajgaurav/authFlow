import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const loggedIn = null;

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
      {loggedIn ? (
        <Stack.Screen name="app" component={AppStack} />
      ) : (
        <Stack.Screen name="auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
