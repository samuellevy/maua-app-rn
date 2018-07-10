import React, { Component } from 'react';

import { View, StyleSheet, Text, Button, AsyncStorage } from 'react-native';
import api from '../../services/api';

export default class Teste extends Component {
  state = {
    errorMessage: null
  };
  
  signIn = async () => {
    try{
      const response = await api.post('/users/token',{
        username: 'admin',
        password: 'admin'
      });
      
      const { user, token } = response.data.data;

      await AsyncStorage.multiSet([
        ['@CodeApi:token', token],
        ['@CodeApi:user', JSON.stringify(user)]
      ]);
    } catch (response){
      this.setState({ errorMessage: response.data.message });
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
      { !!this.state.errorMessage && <Text>{ this.state.errorMessage }</Text>}
      <Button onPress={this.signIn} title="Entrar"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});