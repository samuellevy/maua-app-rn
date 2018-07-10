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
    }

    state = {
        viewSection :false,
        idUser: 0,
        nome: null,
        cpf: null,
        email: null,
        // params: [{'user':null}],
        arrayUser: [
            {
                id: 10,
                email:"admin@3aworldwide.com.br",
                loja:"3aW",
                name:"Admin dev",
                phone:"2122711700",
                pontuacao:"510",
                cpf: "111.222.333.44",
                ranking:"4",
                username:"admin",
            },
            {
                id: 2,
                email:"ronald@3aworldwide.com.br",
                loja:"3aW",
                name:"Admin dev",
                phone:"2122711700",
                pontuacao:"510",
                cpf: "111.222.333.44",
                ranking:"4",
                username:"admin",
            },
            {
                id: 3,
                email:"vvvvvv@3aworldwide.com.br",
                loja:"3aW",
                name:"Admin dev",
                phone:"2122711700",
                pontuacao:"510",
                cpf: "111.222.333.44",
                ranking:"4",
                username:"admin",
            },
            {
                id: 4,
                email:"aaaaa@3aworldwide.com.br",
                loja:"3aW",
                name:"Admin dev",
                phone:"2122711700",
                pontuacao:"510",
                cpf: "111.222.333.44",
                ranking:"4",
                username:"admin",
            }
        ]
    }

    formData() {
        return (
            <View style={styles.contentAddUser}>
                {this.state.arrayUser.map((arrayUser, index) => {
                    // this.setState({nameUser: arrayUser.name})
                    return (
                        <View key={index}>
                            {arrayUser.id == this.state.idUser &&
                                <View>
                                    {/* {nameUser = arrayUser.name} */}
                                    <Text>teste</Text>
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
                                </View>
                            }
                        </View>
                    )
                })}
            </View>
        );
    }

    renderBottomComponent(){
        if(this.state.viewSection) {
            return (
                <ModalDelete id={this.state.idUser}/>
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
        this.state.idUser = 10;
        let idUser = this.props.navigation.state.params;
        console.log(idUser)

    	return (              
			<View style={styles.containerAdd}>
                {/* <AlertBox mensager={"Alterações salvas!"}/>  */}
 
                <ScrollView style={{marginBottom: 50, padding: 18}}>
                    <TitleTop textContent={'ADICIONAR FUNCIONÁRIOS'} />

                    {this.formData()}

                    <View style={styles.addEmplayee}>
                        <TouchableOpacity style={styles.addBtn} onPress={() => {this.setState({visibleModal: false})} }>
                            <View style={styles.boxIcon}>
                                <MaterialIcon name="add" size={15} style={styles.iconAdd}></MaterialIcon>
                            </View>
                            <Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.deleteBtn} onPress={this.buttonPress}>
                            <MaterialIcon name="delete" size={15} style={styles.iconDelete}></MaterialIcon>
                            <Text style={styles.textBtn}>EXCLUIR FUNCIONÁRIO</Text>
                        </TouchableOpacity>

                    </View> 
                </ScrollView>  
                {this.renderBottomComponent()}
			</View>
	    );  
  	}
}