import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';

import { colors } from '../../../styles';

import { View } from 'react-native';
import Button from '../../../components/button';

import styles from './styles';

export default class Sent extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxSent}>
          <Text style={styles.txtSent}>
            Mensagem enviada!
          </Text>
        </View>
        <View style={styles.boxBack}>
          <TouchableOpacity>
            <Button title={'Voltar'} size={60} color={colors.transparent} style={styles.btnBack}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}