/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {configureAppStore} from '../redux/store';
import Home from './screens/home';

const store = configureAppStore();
type IApp = JSX.Element | null;

const App: () => IApp = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
