/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import AppNavigator from './AppNavigator';
import Footer from './src/components/Footer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppNavigator />
      </React.Fragment>
    );
  }
}