/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {IApp} from 'src/interfaces-and-types/IApp';
import {Provider} from 'react-redux';
import {configureAppStore} from '../redux/store';
import Home from '../screens/home/Home';

const store = configureAppStore();

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
