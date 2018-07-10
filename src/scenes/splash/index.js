import React, { Component } from 'react';

import { View, Text, AsyncStorage } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles';
const timer = require('react-native-timer');

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
		percentValue: 0,
    }
    
    componentWillMount(){
        this.setState({percentValue: this.state.percentValue}, () => timer.setInterval(
            this, 'loading', () => 
            {
                if(this.state.percentValue == 360){
                    this.setState({percentValue: 0});
                }else{
                    this.setState({percentValue: this.state.percentValue + 5});
                }
                // console.log(this.state.percentValue);
            }
            , 10
        ));
    }

    componentDidMount = async () => {
        // AsyncStorage.clear();
        let navigateTo;
        const token = await AsyncStorage.getItem('@CodeApi:token');
        const remember = await AsyncStorage.getItem('@CodeApi:remember');
        if(token && remember == 'true') {
            navigateTo = 'Player'; //or home to instantly enter
        } else {
            navigateTo = 'Login';
        }
        timer.setTimeout(
            this, 'fakeLoading', () => 
            {
                this.props.navigation.navigate(navigateTo);
                timer.clearInterval(this);
            }
            , 1000
        );
    }

    render() {
    return (
        <View style={{flex:1,backgroundColor:colors.primary, justifyContent: 'center', alignItems:'center'}}>
            <MaterialIcon name={'loading'} size={60} color={'#000'} style={{transform: [{ rotate: this.state.percentValue + 'deg'}]}}/>
        </View>
    );
  }
}
