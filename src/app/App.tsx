/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {configureAppStore} from '../redux/store';
import Home from './screens/home';
import {Details} from './screens/Details';
import {createStackNavigator} from '@react-navigation/stack';

const store = configureAppStore();
type IApp = JSX.Element | null;

const Stack = createStackNavigator();

const App: () => IApp = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <Stack.Navigator screenOptions={{gestureDirection: 'horizontal'}}>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
