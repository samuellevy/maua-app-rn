import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';

import { View } from 'react-native';
import MainNavigator from './MainNavigator';

export default class App extends Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
