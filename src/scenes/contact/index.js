import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native'
import { colors } from '../../styles';

import { View } from 'react-native';
import Title from '../../components/title/primary';
import Button from '../../components/button';

import styles from './styles';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            {'Fale Conosco'.toUpperCase()}
          </Text>
          <Text style={styles.txtDescription}>Possui algum comentário, dúvida ou sugestão? Entre em contato com a gente!</Text>
          <View style={styles.inputBox}>
            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder='Escreva sua mensagem' placeholderTextColor={colors.gray} multiline={true} onChangeText={(text) => this.setState({ text })}/>
          </View>
        </View>
        <View style={styles.boxSend}>
          <TouchableOpacity>
            <Button title={'Enviar mensagem'} size={60} color={colors.regular} style={[styles.boxSend, this.state.text!=null?{backgroundColor:colors.yellow}:{backgroundColor:colors.gray}]}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}