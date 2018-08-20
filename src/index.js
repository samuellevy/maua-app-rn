import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';

import { View, BackAndroid } from 'react-native';
import MainNavigator from './MainNavigator';

export default class App extends Component {
    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
        // Alert.alert("No Users Found", "Oops, Looks like you are not signed in");
    }
      
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        return true;
	}
	
  	render() {
	    return (
      		<MainNavigator />
    	);
  	}
}
