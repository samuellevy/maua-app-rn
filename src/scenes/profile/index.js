import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
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
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
    };

    state={
        loja:null,
        email:null,
        name:null,
        tel:null,
        senha:null,
        isLoading: true,
        reloading: false,
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
            this.setState({dataSource: rest, isLoading: false, reloading: false, loja:rest.user.loja,email:rest.user.email,name:rest.user.name,tel:rest.user.phone});
        });
    }
    
    postData = async () => {
        try{
            const response = await api.post('/users/edit/me',{
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