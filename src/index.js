import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';

import { View, BackAndroid, BackHandler } from 'react-native';
import MainNavigator from './MainNavigator';

export default class App extends Component {
    componentDidMount() {
        BackHandler.addEventListener('backPress', () => {
            const { dispatch, nav } = this.props;

            
            return true;
        });
    }
    
    componentWillUnmount() {
        BackHandler.removeEventListener('backPress')
    }
	
  	render() {
	    return (
      		<MainNavigator />
    	);
  	}
}
