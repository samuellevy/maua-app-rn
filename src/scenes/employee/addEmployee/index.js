import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../../components/navigation/NavIcon';
import styles from './styles';
import { colors, metrics, fonts } from '../../../styles';

import Header from '../../../components/header';
import Nav from '../../../components/navigation';
import AlertBox from '../components/alert';
import rest from '../../../services/rest';

import ModalDelete from '../components/modal';
import TitleTop from '../../../components/title/primary';

const nameUser =  null;

export default class addEmployee extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
      };
      
    constructor(props) {
        super(props);
        this.getUserData();
    }

    state = {
        arrayUserT: [],
        viewSection :false,
        idUser: 0,
        nome: null,
        cpf: null,
        email: null,
        // params: [{'user':null}],
        arrayUser: []
    } 

    getUserData = async () => {
		rest.get('/users/list').then((rest)=>{
			this.setState({
			  	isLoading: false,
			  	arrayUser: rest.users
            });
		})
    }

    // deleteUser() {
	// 	rest.get('/users/edit').then((rest)=>{
	// 		this.setState({
	// 		  	isLoading: false,
	// 		  	arrayUser: rest.users
    //         });
	// 	})
    // }

    deleteUser(idUser) {
		rest.get('/users/remove').then((rest)=>{
			this.setState({
			  	id: idUser,
            });
		})
    }

    formData(userId) {
        return (
            <View style={styles.contentAddUser}>
                {this.state.arrayUser.map((arrayUser, index) => {
                    // this.setState({nameUser: arrayUser.name})
                    return (
                        <View key={index}>
                            {arrayUser.id == userId &&
                                <View>
                                    {/* {nameUser = arrayUser.name} */}
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>NOME</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(nome) => this.setState({nome})} placeholder={arrayUser.name} placeholderTextColor={colors.textColor}/>
                                    </View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>CPF</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(cpf) => this.setState({cpf})} placeholder={arrayUser.cpf} placeholderTextColor={colors.textColor}/>
                                    </View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>E-MAIL</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} placeholder={arrayUser.email} placeholderTextColor={colors.textColor}/>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 11, paddingTop: 10,}}>A senha do seu funcionário é </Text><Text style={{fontWeight: 'bold',fontSize: 11, paddingTop: 10,}}>quementendevende</Text>
                                    </View>
                                </View>
                            }
                        </View>
                    )
                })}
            </View>
        );
    }

    renderBottomComponent(userId){
        if(this.state.viewSection) {
            return (
                <ModalDelete id={userId}/>
            )
        }
    } 
    
    buttonPress=()=>{
        if(this.state.viewSection == true) {
            this.setState({viewSection:false}) 
        } else {
            this.setState({viewSection:true})
        }
    }
  	render() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'NO-ID');

        if(userId !== null) {
            return (              
                <View style={styles.containerAdd}>
                    {/* <AlertBox mensager={"Alterações salvas!"}/>  */}
    
                    <ScrollView style={{marginBottom: 50, padding: 18}}>
                        <TitleTop textContent={'ADITAR PERFIL'} />
    
                        {this.formData(userId)}
    
                        <View style={styles.addEmplayee}>
                            <TouchableOpacity style={styles.addBtn} onPress={() => {this.setState({visibleModal: false})} }>
                                <View style={styles.boxIcon}>
                                    <MaterialIcon name="add" size={15} style={styles.iconAdd}></MaterialIcon>
                                </View>
                                <Text style={styles.textBtn}>SALVAR ALTERAÇÃO</Text>
                            </TouchableOpacity>
    
                            <TouchableOpacity style={styles.deleteBtn} onPress={this.buttonPress}>
                                <MaterialIcon name="delete" size={15} style={styles.iconDelete}></MaterialIcon>
                                <Text style={styles.textBtn}>EXCLUIR FUNCIONÁRIO</Text>
                            </TouchableOpacity>
    
                        </View> 
                    </ScrollView>  
                    {this.renderBottomComponent(userId)}
                </View>
            );
        } else {
            return (
                <View style={styles.containerAdd}>
                    {/* <AlertBox mensager={"Alterações salvas!"}/>  */}
    
                    <ScrollView style={{marginBottom: 50, padding: 18}}>
                        <TitleTop textContent={'ADICIONAR FUNCIONÁRIOS'} />
    
                        <View style={styles.contentAddUser}>
                            <View>
                                <View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>NOME</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(nome) => this.setState({nome})} placeholderTextColor={colors.textColor}/>
                                    </View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>CPF</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(cpf) => this.setState({cpf})} placeholderTextColor={colors.textColor}/>
                                    </View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>E-MAIL</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} placeholderTextColor={colors.textColor}/>
                                    </View>
                                </View>
                            </View>
                        </View> 
    
                        <View style={styles.addEmplayee}>
                            <TouchableOpacity style={styles.addBtn} onPress={() => {this.setState({visibleModal: false})} }>
                                <View style={styles.boxIcon}>
                                    <MaterialIcon name="add" size={15} style={styles.iconAdd}></MaterialIcon>
                                </View>
                                <Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
                            </TouchableOpacity>
    
                        </View> 
                    </ScrollView>  
                    {this.renderBottomComponent()}
                </View>
            );
        }
  	}
}