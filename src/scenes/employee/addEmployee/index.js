import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../../components/navigation/NavIcon';
import styles from './styles';
import { colors, metrics, fonts } from '../../../styles';
import { TextInputMask } from 'react-native-masked-text'

import Header from '../../../components/header';
import Nav from '../../../components/navigation';
import AlertBox from '../components/alert';
import rest from '../../../services/rest';

import ModalDelete from '../components/modal';
import TitleTop from '../../../components/title/primary';

const nameUser =  null;

export default class addEmployee extends Component {
    static navigationOptions = {
        // header: ({ navigation }) => (<Header navigation={navigation}/>),
        title: 'Funcionários',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' },
    };
      
    constructor(props) {
        super(props);
        this.getData(props.navigation.state.params.userId);

        console.log(props.navigation.state.params.userId);

        this.state = {
            arrayUserT: [],
            viewSection :false,
            idUser: 0,
            nome: null,
            email: null,
            phoneUser: null,
            nomeNew: null,
            emailNew: null,
            phoneNew: null,
            idUserEdit: null,
            arrayUser: [],
    
            user:{
                id: null,
                name: null,
                email: null,
                phone: null,
            }
        } 
    }

    getData(id) {
		rest.get('/users/get/'+id).then((rest)=>{
			this.setState({
			  	isLoading: false,
                nome: rest.user.name,  
                email: rest.user.email,  
                phone: rest.user.phone,  
            });
		})
    }

    deleteUser(idUser) {
		rest.get('/users/remove').then((rest)=>{
			this.setState({
			  	id: idUser,
            });
		})
    }

    formData(userId) {
        // for(let i = 0; i <= this.state.arrayUser.length; i++) {
        //     console.log(this.state.arrayUser[i])
        //     // if(this.state.arrayUser[i].id == userId) {
        //     //     this.setState({
        //     //         nome: this.state.arrayUser[i].name,
        //     //         email: this.state.arrayUser[i].email,
        //     //         phoneUser: this.state.arrayUser[i].phone,
        //     //     })
        //     //     // console.log(this.state.arrayUser[i].id)
        //     // }
        // }

        return (
            <View style={styles.contentAddUser}>
                <View>
                    <View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>NOME</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(nome) => this.setState({nome})} value={this.state.nome} placeholderTextColor={colors.textColor}  autoCorrect={false} autoCapitalize='words'/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>E-MAIL</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} value={this.state.email} placeholderTextColor={colors.textColor}  autoCorrect={false} autoCapitalize='none'/>
                        </View>
                        <View style={styles.boxInput}> 
                            <Text style={styles.inputText}>TELEFONE</Text>
                            <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(phone) => this.setState({phone})} value={this.state.phone} placeholderTextColor={colors.textColor}/>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    renderBottomComponent(userId){
        if(this.state.viewSection) {
            return (
                <ModalDelete id={userId} navigation={this.props.navigation}/>
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

    clickAddFunc() {
        this.setState({visibleModal: false})
        
        let newUser = JSON.stringify({
            name: this.state.nomeNew,
            email: this.state.emailNew,
            phone: this.state.phoneNew,
        });

        if(
            this.state.nomeNew == null || this.state.nomeNew == '' ||
            this.state.emailNew == null || this.state.emailNew == '' ||
            this.state.phoneNew == null || this.state.phoneNew == ''
        ){
            Alert.alert(
                "Algo aconteceu",
                "Por favor, preencha todos os campos.",
                    [
                        {text: 'OK', onPress: () => {}}
                    ],
                { cancelable: false }
            )
        } else{
            rest.post('/users/add', newUser).then((rest)=>{
                Alert.alert(
                    "Usuário cadastrado!",
                    "Um novo funcionário foi cadastrado",
                        [
                            {text: 'OK', onPress: () => {this.props.navigation.navigate('Employe', {reloading: true})}}
                        ],
                    { cancelable: false }
                )
            });
            this.setState({
                nomeNew: null,
                emailNew: null,
                phoneNew: null
            });
        }
    }

    editUser(userId){
        this.setState({visibleModal: false})
        
        let newUser = JSON.stringify({
            id: userId,
            name: this.state.nome,
            phone: this.state.phone,
            email: this.state.email,
        });
        
        rest.post('/users/edit/'+userId, newUser).then((rest)=>{

        });

        Alert.alert(
            "Usuário atualizado!",
            "Suas alterações foram salvas com sucesso",
                [
                    {text: 'OK', onPress: () => {this.props.navigation.navigate('Employe', {reloading: true})}}
                ],
            { cancelable: false }
        )

    }

    isValid() {
        let valid = this.myDateText.isValid();
        let rawValue = this.myDateText.getRawValue();
    }

  	render() {
        const { navigation } = this.props;
        const userId = navigation.getParam('userId', 'NO-ID');

        if(userId !== null) {
            return (              
                <View style={styles.containerAdd}>
                    {/* <AlertBox mensager={"Alterações salvas!"}/>  */}
    
                    <ScrollView style={{marginBottom: 50, padding: 18}}>
                        <TitleTop textContent={'EDITAR FUNCIONÁRIO'} />
    
                        {this.formData(userId)}
    
                        <View style={styles.addEmplayee}>
                            <TouchableOpacity style={styles.addBtn} onPress={() => {this.setState({visibleModal: false}); this.editUser(userId)} }>
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
                        <TitleTop textContent={'ADICIONAR FUNCIONÁRIO'} />
    
                        <View style={styles.contentAddUser}>
                            <View>
                                <View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>NOME</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(nomeNew) => this.setState({nomeNew})} value={this.state.nomeNew} placeholderTextColor={colors.textColor} autoCorrect={false} autoCapitalize='words'/>
                                    </View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>TELEFONE</Text>
                                        <TextInputMask type={'cel-phone'} style={styles.input} underlineColorAndroid='transparent' onChangeText={(phoneNew) => this.setState({phoneNew})} placeholderTextColor={colors.textColor} value={this.state.phoneNew!=null?this.state.phoneNew:''} value={this.state.phoneNew} />
                                    </View>
                                    <View style={styles.boxInput}> 
                                        <Text style={styles.inputText}>E-MAIL</Text>
                                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(emailNew) => this.setState({emailNew})} placeholderTextColor={colors.textColor} value={this.state.emailNew}  autoCorrect={false} autoCapitalize='none'/>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <Text style={{fontSize: 11, paddingTop: 10,}}>A senha do seu funcionário é </Text><Text style={{fontWeight: 'bold',fontSize: 11, paddingTop: 10,}}>quementendevende</Text>
                                    </View>
                                </View>
                            </View>
                        </View> 
    
                        <View style={styles.addEmplayee}>
                            <TouchableOpacity style={styles.addBtn} onPress={() => {this.clickAddFunc()} }>
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