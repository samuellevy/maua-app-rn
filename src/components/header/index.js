import React, { Component } from 'react';
import { View, Image, TouchableOpacity, StatusBar } from 'react-native';
import styles from './styles';

export default class Header extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        // const { goBack } = this.props.navigation;
 
        return (
            <View style={styles.header}>
                <StatusBar translucent={true} /> 
                <View style={styles.logoContainer}>
                    <TouchableOpacity onPress={()=>{}}>
                        <Image
                            style={styles.logo}
                            source={require('../../../assets/img/logo.png')}
                        />
                    </TouchableOpacity>
                </View>
                
            </View>
        );
    }
}


