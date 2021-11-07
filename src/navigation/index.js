import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { SCREEN_NAMES } from '@constants';
import { Home, ViewStock } from '@screens';

const Stack = createStackNavigator();

const AppNavigator = () => {
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
