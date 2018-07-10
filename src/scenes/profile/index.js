import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
// import TextInputMask from 'react-native-text-input-mask';
const timer = require('react-native-timer');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';  
import NavIcon from '../../components/navigation/NavIcon';
import { colors, metrics, fonts } from '../../styles';
import styles from './styles';
 
import TitleTop from '../../components/title/primary';

import api from '../../services/api';


export default class Profile extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
    };

    state={
        loja:null,
        email:null,
        name:null,
        tel:null,
        senha:null,
    }

    
    constructor(props) {
        super(props); 
        this.getData();
    }

    getData = async () => {
        try{
            const response = await api.get('/users/me');
            var user = response.data.user;
            this.setState({loja:user.loja,email:user.email,name:user.name,tel:user.phone});
            console.log(user);
            this.setState({user: response.data.user});
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    postData = async () => {
        try{
            const response = await api.post('/users/edit/me',{
                name: this.state.name,
                tel: this.state.tel,
                senha: this.state.senha
            });

            console.log(response.data);
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }
	  
  	render() {  
    	return (    
			<View style={styles.container}> 
				<ScrollView style={{marginBottom: 60, padding: 18}}>   
					<TitleTop textContent={'EDITAR PERFIL'} />    

                    <View style={styles.boxForm}>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>LOJA</Text>
                            <TextInput editable={false} style={styles.input} underlineColorAndroid='transparent'  value={this.state.loja} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>E-MAIL</Text>
                            <TextInput editable={false} style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} value={this.state.email} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputTextGreen}>NOME</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(name) => this.setState({name})} value={this.state.name} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                        </View>
                        
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputTextGreen}>TEL.</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(tel) => this.setState({tel})} value={this.state.tel} placeholderTextColor={colors.textColor} returnKeyType='done'/>

                            {/* <TextInputMask
                            refInput={ref => { this.input = ref }}
                            onChangeText={(formatted, extracted) => {
                                console.log(formatted) // +1 (123) 456-78-90
                                console.log(extracted) // 1234567890
                            }}
                            mask={"+1 ([000]) [000] [00] [00]"}
                            /> */}
                        </View>

                        <View style={styles.boxInput}>  
                            <Text style={styles.inputTextGreen}>SENHA</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(senha) => this.setState({senha})} value={this.state.senha} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                            <TouchableOpacity style={styles.btnVisible}> 
                                <MaterialIcon name="remove-red-eye" size={15} style={styles.iconDeleteTransparent}></MaterialIcon>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.boxBtn}>
                            <TouchableOpacity style={styles.btnSalve} onPress={() => { this.postData(); }}> 
                                <Text style={styles.textBtn}>SALVAR ALTERAÇÕES</Text>
                            </TouchableOpacity>
                        </View>
                    </View> 
				</ScrollView>
			</View>
	    ); 
  	}
}