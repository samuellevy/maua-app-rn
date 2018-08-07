import React, { Component } from 'react';

import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import { colors, metrics, fonts } from '../../../styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import TitleTop from '../../../components/title/primary';
import rest from '../../../services/rest';
import styles from './styles';
import Loading from '../../../components/loading';

export default class Form extends Component {
    state = {
        isLoading: true,
    }

    constructor(props){
        super(props);
    }


    componentWillReceiveProps(){
        this.setState({
            isLoading: false,
        });
    }

    getData(id){
		rest.get('/users/list/'+id).then((rest)=>{
			this.setState({
			  	isLoading: false,
                dataSource: rest,
                name: rest.user.name,
                email: rest.user.email,
                phone: rest.user.phone
            });
		})
    }

    generateForm(){
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        return(
            <View>
                <View>
                    <View style={styles.boxInput}> 
                        <Text style={styles.inputText}>NOME</Text>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(name) => this.setState({name})} value={this.state.name} placeholderTextColor={colors.textColor}/>
                    </View>
                    <View style={styles.boxInput}> 
                        <Text style={styles.inputText}>E-MAIL</Text>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(email) => this.setState({email})} value={this.state.email} placeholderTextColor={colors.textColor}/>
                    </View>
                    <View style={styles.boxInput}> 
                        <Text style={styles.inputText}>TELEFONE</Text>
                        <TextInput style={styles.input} underlineColorAndroid='transparent' onChangeText={(phone) => this.setState({phone})} value={this.state.phone} placeholderTextColor={colors.textColor}/>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        const { navigation } = this.props;
        let user_id = navigation.getParam('user_id', 'NO-ID');
        return (
            <View style={styles.containerAdd}>    
                <ScrollView style={{marginBottom: 50, padding: 18}}>
                    <TitleTop textContent={'EDITAR FUNCIONÁRIO'} />
                    {/* {this.getData(user_id)} */}
                    {this.generateForm(user_id)}
                    
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
            </View>
        );
    }
}