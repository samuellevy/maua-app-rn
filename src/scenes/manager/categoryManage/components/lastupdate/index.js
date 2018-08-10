import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default class LastUpdate extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <Text style={styles.lastUpdate}>
                Última atualização: 11/05/18, 12h34.
            </Text>
        );
    }
}


