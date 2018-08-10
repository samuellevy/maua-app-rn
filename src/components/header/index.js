import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar, Text } from 'react-native';
import { createDrawerNavigator, LeftButton } from 'react-navigation';
import styles from './styles';
import Ionicon from 'react-native-vector-icons/Ionicons';
// import LeftButton from './leftbutton';

export default class Header extends Component {
    renderHeader(navigation, backTo){
        <View>
            <TouchableOpacity onPress={()=>{navigation.navigate(backTo)}} style={styles.arrowBack}>
                <Ionicon name={'ios-arrow-back'} size={25} style={styles.icon} color={"#fff"}></Ionicon>
            </TouchableOpacity>
        </View>
    }
    
    render() {
        // const { goBack } = this.props.navigation;
        let navigation = this.props.navigation;
        let backTo = this.props.backTo;
        return (
            <View style={styles.header}>
            {backTo!=null && this.renderHeader(navigation, backTo)}
            {/* <StatusBar translucent={false} />  */}
            <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../assets/img/logo.png')}
                    />
            </View>
            </View>
        );
    }
}


