import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import { LOGIN, SIGN_UP } from './RoutesContants';

import { BACKGROUND } from '../utils/Colors';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <App.Navigator initialRouteName="Login">
        <App.Screen
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: BACKGROUND,
            },
          }}
          name={LOGIN}
          component={Login}
        />
        <App.Screen
          options={{
            headerShown: false,
            cardStyle: {
              backgroundColor: BACKGROUND,
            },
          }}
          name={SIGN_UP}
          component={SignUp}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
