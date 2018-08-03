import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default class CardHeader extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let title = this.props.title;
        let icon = this.props.icon;
        let color = this.props.color;

        return (
            <View style={styles.box}>
                <View style={[styles.circle, {backgroundColor:color}]}>
                    <MaterialIcon name={icon} size={25} style={styles.icon} color={"#fff"}></MaterialIcon>
                </View>
                <Text style={[styles.title, {color:color}]}>{title.toUpperCase()}</Text>
            </View>
        );
    }
}


