import React, { Component } from 'react';

import { View, Text, Image } from 'react-native';

import styles from './styles';


export default class WinnerCard extends Component {
  render() {

    let store = this.props.store;
    let score = this.props.score;

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={require('../../../../../assets/img/1-ranking.png')}
            /> 
          </View>

          <View style={styles.content}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>{'1º Lugar'.toUpperCase()}</Text>
            </View>
            <Text style={styles.loja}>{store}</Text>
            <Text style={styles.score}>{score} pts</Text>
          </View>
        </View>
      </View>
    );
  }
}
