import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';


export default class Card extends Component {
  render() {
    let status = this.props.status;
    let title = this.props.title;
    let image = this.props.image;
    let store = this.props.store;
    let score = this.props.score;
    let url   = this.props.url;

    switch(image){
      case '1-ranking':
        switch (status) {
          case 'non-user':
            url = require('../../../../../assets/img/1-ranking.png');
            break;
          case 'user':
            url = require('../../../../../assets/img/1-ranking-user.png');
            break;
        }
      break;
      case '2-ranking':
        switch (status) {
          case 'non-user':
            url = require('../../../../../assets/img/2-ranking.png');
            break;
          case 'user':
            url = require('../../../../../assets/img/2-ranking-user.png');
            break;
        }
      break;
      case '3-ranking':
        switch (status) {
          case 'non-user':
            url = require('../../../../../assets/img/3-ranking.png');
            break;
          case 'user':
            url = require('../../../../../assets/img/3-ranking-user.png');
            break;
        }
      break;
      case '4-ranking':
        switch (status) {
          case 'non-user':
            url = require('../../../../../assets/img/4-ranking.png');
            break;
          case 'user':
            url = require('../../../../../assets/img/4-ranking-user.png');
            break;
        }
      break;
      case '5-ranking':
        url = require('../../../../../assets/img/5-ranking.png');
      break;
      default:
        url = require('../../../../../assets/img/5-ranking.png');
      break;


    }
 
    switch (status) {
      case 'user':
        color = colors.yellow;
        break;
      case 'non-user':
        color = colors.light;
        break;
    }

    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.titleBox} backgroundColor={color}>
              <Text style={styles.title}>{title.toUpperCase()}</Text>
            </View>
              <Image
                  style={styles.image}
                  source={url}
                /> 
            <Text style={styles.loja}>{store}</Text>
            <Text style={[styles.score, color={color}]}>{score} pts</Text>
          </View>
          {/* {status=='user' && <View style={styles.history}><TouchableOpacity style={styles.historyBtn} onPress={()=>url}><Text style={styles.historyBtnText}>{'Histórico'.toUpperCase()}</Text><MaterialCommunityIcon name={'arrow-right'} size={16} color={colors.light} style={styles.icon} /></TouchableOpacity></View>} */}
        </View>
      </View>
    );
  }
}
