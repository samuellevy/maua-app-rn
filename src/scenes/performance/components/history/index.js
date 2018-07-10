import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { colors } from '../../../../styles'

import styles from './styles';


export default class History extends Component {
  render() {
    let date = this.props.date;
    let description = this.props.description;
    let score = this.props.score;
    let child = this.props.child;

    // switch (child) {
    //   case 'last':
    //     border = borderOn;
    //     break;
    //   case 'not-last':
    //     border = borderOff;
    //     break;
    // }
    return (
      <View style={[styles.container,{borderBottomWidth:1, borderBottomColor:colors.regular}]}>
        <View style={styles.dateCell}>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.introCell}>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.score}>+<Text style={styles.bold}>{score}</Text> pts</Text>
        </View>
      </View>
    );
  }
}
