import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeRoutes} from './AppNavigation';

const Stack = createStackNavigator();

const ActiveRoute = HomeRoutes;

const {screenOptions, initialRoute} = ActiveRoute;

const AppNav = props => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={screenOptions}>
          {ActiveRoute.routes.map((route, index) => (
            <Stack.Screen key={index} {...route} />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default AppNav;
