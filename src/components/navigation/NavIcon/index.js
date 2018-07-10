import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import LaFargeIcon from '../../LaFargeIcon';
import {colors, metrics} from '../../../styles';

export default class NavIcon extends Component {
  render() {
    let title = this.props.title;
    let icon = this.props.icon;
    let size = 27;
    let color = colors.gray;
    let activeColor = colors.primary;
    let active = this.props.active
    return (
      <View style={styles.tabBtn}>
        {/* <MaterialIcon name={icon} size={30} style={styles.icon} color={"#ddd"}></MaterialIcon> */}
        <LaFargeIcon icon={icon} size={size} color={active?activeColor:color} active={active}/>
        <Text style={[styles.title, {color: active?activeColor:color}]}>{title}</Text>
      </View>
    );
  }
}
