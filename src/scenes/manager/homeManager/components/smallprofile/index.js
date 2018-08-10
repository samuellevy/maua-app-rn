import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class SmallProfile extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let user = this.props.user;
        
        return (
            <View style={styles.container}>
                <Text style={styles.name}>
                    Olá, {user.name}!
                </Text>
                <Text style={styles.store}>
                    {user.loja}
                </Text>
            </View>
        );
    }
}


