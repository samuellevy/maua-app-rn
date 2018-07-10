import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import icons from './icons';

export default class LaFargeIcon extends Component {
  render() {
    let icon = this.props.icon;
    let size = this.props.size;
    let color = this.props.color;
    let active = this.props.active;
    let char = null;

    if (active){
        icon+='_active';
    }
    switch(icon){
        case 'info':
            char = 'e900';
            break;
        case 'info_o':
            char = 'e901';
            break;
        case 'more':
            char = 'e904';
            break;
        case 'more_active':
            char = 'e904';
            break;
        case 'ranking':
            char = 'e905';
            break;
        case 'ranking_active':
            char = 'e906';
            break;
        case 'performance':
            char = 'e907';
            break;
        case 'performance_active':
            char = 'e907';
            break;
        case 'student':
            char = 'e90a';
            break;
        case 'student_active':
            char = 'e90b';
            break;
        case 'home':
            char = 'e90c';
            break;
        case 'home_active':
            char = 'e90d';
            break;
    }
    return (
        <View>
            <Text style={[styles.char, {fontSize: size, color: color}]}>{String.fromCharCode(parseInt(char,16))}</Text>
        </View>
    );
  }
}
