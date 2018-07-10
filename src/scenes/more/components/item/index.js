import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

import { colors } from '../../../../styles';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Item extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let title = this.props.title;
        let icon = this.props.icon;
        return (
            <View style={styles.item}>
                <MaterialCommunityIcon name={icon} size={28} color={colors.light} style={styles.icon}/>
                <Text style={styles.text}>{title}</Text>
            </View>
        );
    }
}
