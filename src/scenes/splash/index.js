import React, { Component } from 'react';

import { View, Text, AsyncStorage } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { colors } from '../../styles';
import rest from '../../services/rest';
const timer = require('react-native-timer');

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        percentValue: 0,
        isLoading: true,
    }

    getData(navigation, token){
        rest.get('/public/basics').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                user: rest.user,
                typeUser: rest.user.role
            });
            if(rest.user.role=='comercial'){
                navigateTo = 'Manager';
            }else{
                navigateTo = 'Default';
            }
            if(rest.user.force_login==1){
                this.clearStorage();
                navigateTo = 'Login';
            }
            this.props.navigation.navigate(navigateTo);
        })
    }

    clearStorage(){
        AsyncStorage.clear();
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
            // navigateTo = 'Default'; //or home to instantly enter
            this.getData(this.props.navigation, token);
        } else {
            navigateTo = 'Login';
            this.props.navigation.navigate(navigateTo);
        }
        timer.setTimeout(
            this, 'fakeLoading', () => 
            {
                
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
