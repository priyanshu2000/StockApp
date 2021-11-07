import React, { useEffect } from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';


import { SCREEN_NAMES } from '@constants';
import { Home, ViewStock } from '@screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREEN_NAMES.Home}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name={SCREEN_NAMES.Home} component={Home} />
        <Stack.Screen name={SCREEN_NAMES.ViewStock} component={ViewStock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
