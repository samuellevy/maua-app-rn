import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

export default class Button extends Component {
  render() {
    let title = this.props.title;
    let size = this.props.size;
    let color = this.props.color;
    return (
      <View style={[styles.boxButton, {paddingHorizontal: size, backgroundColor: color}]}>
          <Text style={styles.txtSign}>{title.toUpperCase()}</Text>
      </View>
    );
  }
}
