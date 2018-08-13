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
    let active = this.props.active;
    let fontIcon = this.props.fontIcon;
    return (
      <View style={styles.tabBtn}>
        {(fontIcon==true)?<MaterialIcon name={icon} size={30} style={styles.icon} color={"#ddd"}></MaterialIcon>:<LaFargeIcon icon={icon} size={size} color={active?activeColor:color} active={active}/>}
        {/* <MaterialIcon name={icon} size={30} style={styles.icon} color={"#ddd"}></MaterialIcon> */}
        <Text style={[styles.title, {color: active?activeColor:color}]}>{title}</Text>
      </View>
    );
  }
}
