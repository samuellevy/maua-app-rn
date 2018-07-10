import React, { Component } from 'react';

import { View, Text } from 'react-native';

import styles from '../styles';

export default class Question extends Component {
  static navigationOptions = {
    header: null
};

  render() {
    return (
        <View style={styles.boxQuestion}>
          <Text style={styles.txtQuestionTitle}>1. O que é filler?</Text>
          <View style={styles.boxAnswer}>
            <Text style={styles.txtAnswer}>É um tipo de cimento.</Text>
            <Text style={styles.txtAnswer}>É uma nova ferramenta para misturar cimento.</Text>
            <Text style={styles.txtAnswer}>É uma substância adicionada ao cimento para melhorar o rendimento.</Text>
            <Text style={styles.txtAnswer}>É o nome do cientista que inventou o cimento.</Text>
            <Text style={styles.txtAnswer}>Nenhuma das opções anteriores.</Text>
          </View>
          <View style={styles.boxQuestionConfirm}>
            <Text style={styles.btnQuestionConfirm}>CONFIMAR RESPOSTA</Text>
          </View>
        </View>
    );
  }
}
