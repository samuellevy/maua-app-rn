import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
// import TextInputMask from 'react-native-text-input-mask';
const timer = require('react-native-timer');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';  
import NavIcon from '../../components/navigation/NavIcon';
import { colors, metrics, fonts } from '../../styles';
import styles from './styles';
 
import TitleTop from '../../components/title/primary';
import ModalSucces from './components'

import Loading from '../../components/loading';

import api from '../../services/api';
import rest from '../../services/rest';


export default class Profile extends Component {
  	static navigationOptions = {
    	// title: 'products',
        // headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
        title: '',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' },
    };

    state={
        loja:null,
        username:null,
        email:null,
        name:null,
        tel:null,
        senha:null,
        isLoading: true,
        reloading: false,
        secureText: true,
    }

    
    constructor(props) {
        super(props); 
        this.getData();
    }

    getData(){
        if(this.state.reloading){
            this.setState({isLoading: true});
        }
        rest.get('/users/me').then((rest)=>{
            this.setState({dataSource: rest, isLoading: false, reloading: false, loja:rest.user.loja, username:rest.user.username,email:rest.user.email,name:rest.user.name,tel:rest.user.phone});
        });
    }
    
    postData = async () => {
        if(
            this.state.email == null || this.state.email == '' ||
            this.state.name == null || this.state.name == ''||
            this.state.tel == null || this.state.tel == ''
        ){
            Alert.alert(
                "Campos em branco",
                "Por favor, preencha todos os campos.",
                    [
                        // this.btnAlertConfirm(confirm),
                        // this.btnAlertCancel(cancel)
                        {text: 'OK', onPress: () => {}}
                    ],
                { cancelable: false }
            )
        } else{
            try{
                const response = await api.post('/users/edit/me',{
                    email: this.state.email,
                    name: this.state.name,
                    phone: this.state.tel,
                    senha: this.state.senha
                });
    
                // return <View><ModalSucces mensager={"Cadastrado"} /></View>
                Alert.alert(
                    "Perfil editado",
                    "Todas as alterações foram feitas com sucesso",
                        [
                            // this.btnAlertConfirm(confirm),
                            // this.btnAlertCancel(cancel)
                            {text: 'OK', onPress: () => {this.setState({reloading: true}); this.getData(); this.setState({senha: null});}}
                        ],
                    { cancelable: false }
                )
    
                console.log(response.data);
            } catch (response){
                this.setState({ errorMessage: response.data.message });
            }
        }
    }

    componentWillReceiveProps(){
		this.getData();
        this.forceUpdate();
    }
	  
  	render() {
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
    	return (    
			<View style={styles.container}> 
				<ScrollView style={{marginBottom: 60, padding: 18}}>   
					<TitleTop textContent={'EDITAR PERFIL'} />    

                    <KeyboardAvoidingView style={styles.boxForm} behavior="padding">
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>LOJA</Text>
                            <TextInput editable={false} style={styles.input} underlineColorAndroid='transparent'  value={this.state.loja} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>LOGIN</Text>
                            <TextInput editable={false} style={styles.input} underlineColorAndroid='transparent' onChangeText={(username) => this.setState({username})} value={this.state.username} placeholderTextColor={colors.textColor}/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputTextGreen}>E-MAIL</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} value={this.state.email} placeholderTextColor={colors.textColor} autoCorrect={false} autoCapitalize='none'/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputTextGreen}>NOME</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(name) => this.setState({name})} value={this.state.name} placeholderTextColor={colors.textColor} returnKeyType='done'  autoCorrect={false} autoCapitalize='words'/>
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
                            <TextInput style={styles.input} underlineColorAndroid='transparent' autoCapitalize='none' secureTextEntry={this.state.secureText} onChangeText={(senha) => this.setState({senha})} value={this.state.senha} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                            <TouchableOpacity style={styles.btnVisible} onPress={() => { this.state.secureText ? this.setState({ secureText: false }) : this.setState({ secureText: true })}}> 
                                <MaterialIcon name="remove-red-eye"  size={15} style={styles.iconDeleteTransparent}></MaterialIcon>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.boxBtn}>
                            <TouchableOpacity style={styles.btnSalve} onPress={() => { this.postData(); }}> 
                                <Text style={styles.textBtn}>SALVAR ALTERAÇÕES</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView> 
				</ScrollView>
			</View>
	    ); 
  	}
}