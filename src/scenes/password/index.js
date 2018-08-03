import React, { Component } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, ScrollView, Platform } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { colors } from '../../styles';
import rest from '../../services/rest';

export default class Password extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        username: null,
        password: null,
        errorMessage: null,
        remember: false,
        page: 0
    };

    clickRemember = () => {
        if(this.state.remember){
            this.setState({remember: false});
        }else{
            this.setState({remember: true});
        }
    }

    verify(){
        let data = JSON.stringify({
            email: this.state.email,
            phone: this.state.phone
        });

        rest.post('/users/forget', data).then((rest)=>{
            this.setState({message: rest.success});
            if(rest.success){
                this.setState({
                    page: '1',
                    password: null,
                    confirm_password: null
                });
                
            }
            else{
                alert('Usuário não encontrado.');
            }
        });
    }

    sendData(){
        let data = JSON.stringify({
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password
        });
        if(this.state.password == this.state.confirm_password){
            rest.post('/users/saveNewPass', data).then((rest)=>{
                this.setState({
                    scene: 'result'
                });
                this.props.navigation.navigate('Finish');
            });
        }
        else{
            alert('As senhas não conferem.');
        }
    }

    render() {
        if(this.state.page == 0){
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login'); this.setState({ screen: 'Login' }) }}>
                            <View style={styles.turnBack}>
                                <MaterialCommunityIcon name="arrow-left" size={19} style={styles.iconBack} />
                                <Text style={styles.txtBack}>{'Login'.toUpperCase()}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                            <View style={styles.boxWelcome}>
                                <Text style={styles.txtWelcome}>Esqueceu sua senha?</Text>
                                    <Text style={styles.txtInitial}>Insira seu e-mail abaixo para poder redefinir sua senha.</Text>
                            </View>
                            <View style={styles.boxLogin}>
                                <View style={styles.inputBox}>
                                    <MaterialCommunityIcon name="email" size={20} style={[styles.inputIcon, this.state.errorMessage && this.state.email != null? styles.inputIconError : '']} />
                                    <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={[styles.input, this.state.errorMessage ? styles.inputError : '']} placeholder='E-mail' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={email => this.setState({email})} />
                                    { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                                </View>
                                <View style={styles.inputBox}>
                                    <MaterialCommunityIcon name="phone" size={20} style={[styles.inputIcon, this.state.errorMessage && this.state.phone != null? styles.inputIconError : '']} />
                                    <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={[styles.input, this.state.errorMessage ? styles.inputError : '']} placeholder='Telefone cadastrado' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={phone => this.setState({phone})} />
                                    { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                                </View>
                                <TouchableOpacity onPress={()=>{this.verify()}} disabled={this.state.email != null? false : true} >
                                    <View style={[styles.boxButton, this.state.email!=null?{backgroundColor: colors.primary}:{backgroundColor: colors.gray}]}>
                                        <Text style={styles.txtSign}>ENVIAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('Finish'); this.setState({ screen: 'Finish' }) }}>
                                <Text>VER Finish</Text>
                            </TouchableOpacity> */}
                    </View>
                </View>
            );
        }
        else{
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login'); this.setState({ screen: 'Login' }) }}>
                            <View style={styles.turnBack}>
                                <MaterialCommunityIcon name="arrow-left" size={19} style={styles.iconBack} />
                                <Text style={styles.txtBack}>{'Login'.toUpperCase()}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                            <View style={styles.boxWelcome}>
                                <Text style={styles.txtWelcome}>Nova senha</Text>
                                    <Text style={styles.txtInitial}>Insira sua nova senha abaixo</Text>
                            </View>
                            <View style={styles.boxLogin}>
                                {/* <View style={styles.inputBox}>
                                    <MaterialCommunityIcon name="lock" size={20} style={[styles.inputIcon, this.state.errorMessage && this.state.password != null? styles.inputIconError : '']} />
                                    <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={[styles.input, this.state.errorMessage ? styles.inputError : '']} placeholder='Nova senha' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={password => this.setState({password})} value={this.state.password} autoCorrect={false}/>
                                    { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                                </View> */}
                                <View style={styles.inputBox}>
                                    {/* <MaterialCommunityIcon name="lock" size={20} style={[styles.inputIcon, this.state.errorMessage && this.state.password != null? styles.inputIconError : '']} /> */}
                                    <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={[styles.input, this.state.errorMessage ? styles.inputError : '']} placeholder='Nova senha' placeholderTextColor={colors.light} autoCapitalize='none' onChangeText={password => this.setState({password})} autoCorrect={false} returnKeyType={'done'}/>
                                    {/* { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>} */}
                                </View>
                                <View style={styles.inputBox}>
                                    {/* <MaterialCommunityIcon name="lock" size={20} style={[styles.inputIcon, this.state.errorMessage && this.state.confirm_password != null? styles.inputIconError : '']} /> */}
                                    <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={[styles.input, this.state.errorMessage ? styles.inputError : '']} placeholder='Confirmar nova senha' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={confirm_password => this.setState({confirm_password})} value={this.state.co} autoCorrect={false}/>
                                    { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                                </View>
                                <TouchableOpacity onPress={()=>{this.sendData()}} disabled={this.state.email != null? false : true} >
                                    <View style={[styles.boxButton, this.state.email!=null?{backgroundColor: colors.primary}:{backgroundColor: colors.gray}]}>
                                        <Text style={styles.txtSign}>ENVIAR</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {/* <TouchableOpacity onPress={() => { this.props.navigation.navigate('Finish'); this.setState({ screen: 'Finish' }) }}>
                                <Text>VER Finish</Text>
                            </TouchableOpacity> */}
                    </View>
                </View>
            );
        }
        
    }
} 
