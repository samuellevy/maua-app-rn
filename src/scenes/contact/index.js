import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import { colors } from '../../styles';

import { View } from 'react-native';
import Title from '../../components/title/primary';
import Button from '../../components/button';
import ModalTeste from '../../components/modal/modalRank';
import rest from '../../services/rest';

import styles from './styles';

export default class Contact extends Component {
  static navigationOptions = {
		title: '',
		headerTintColor: 'white',
		headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
		headerTitleStyle: { color: 'white' },
  };

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  sendData(){
    let contact = JSON.stringify({
        text: this.state.text
      });

    rest.post('/public/contact', contact).then((rest)=>{
        console.log(rest);
    });

    alert('Enviado com sucesso!');
    this.setState({text: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {/* <ModalTeste title={"PARABÉNS!"} numberRank={2} description={"Sua loja está perto de atingir a meta! Falta apenas 10% para sua loja completar a meta do mês."}/> */}
          <View>
            <Text style={styles.title}>
              {'Fale Conosco'.toUpperCase()}
            </Text>
            <Text style={styles.txtDescription}>Possui algum comentário, dúvida ou sugestão? Entre em contato com a gente!</Text>
            <View style={styles.inputBox}>
              <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder='Escreva sua mensagem' placeholderTextColor={colors.gray} multiline={true} onChangeText={(text) => this.setState({ text })} value={this.state.text} blurOnSubmit={true} autoCorrect={false} returnKeyType={'done'}/>
            </View>
          </View>
          <View style={styles.boxSend}>
            <TouchableOpacity onPress={()=>{this.sendData()}}>
              <Button title={'Enviar mensagem'} size={60} color={colors.regular} style={[styles.boxSend, this.state.text!=null?{backgroundColor:colors.yellow}:{backgroundColor:colors.gray}]}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}