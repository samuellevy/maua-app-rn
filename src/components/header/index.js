import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Header extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { goBack } = this.props.navigation;
 
        return (
            <View style={styles.header}>
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


