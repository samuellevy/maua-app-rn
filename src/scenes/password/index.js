import React, { Component } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, ScrollView, Platform } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { colors } from '../../styles';
import api from '../../services/api';

export default class Password extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        username: null,
        password: null,
        errorMessage: null,
        remember: false
    };

    componentDidMount = async () => {
        const user = await AsyncStorage.getItem('@CodeApi:user');
        const token = await AsyncStorage.getItem('@CodeApi:token');
        
        if(!!user) {
            this.setState({username:user});
        }else{

        }
    }
    
    signIn = async () => {
        AsyncStorage.clear();
        try{
            const response = await api.post('/users/token',{
                username: this.state.username,
                password: this.state.password
            });
            
            const { user, token } = response.data.data;
            console.log(this.state.remember);
            await AsyncStorage.multiSet([
                ['@CodeApi:token', token],
                ['@CodeApi:user', user],
                ['@CodeApi:remember', JSON.stringify(this.state.remember)]
            ]);

            this.props.navigation.navigate('Home');
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    clickRemember = () => {
        if(this.state.remember){
            this.setState({remember: false});
        }else{
            this.setState({remember: true});
        }
    }

    render() {
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
                            <MaterialCommunityIcon name="email" size={20} style={[styles.inputIcon, this.state.errorMessage && this.state.username != null? styles.inputIconError : '']} />
                                <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={[styles.input, this.state.errorMessage ? styles.inputError : '']} placeholder='E-mail' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={username => this.setState({username})} value={this.state.username!=null?this.state.username:''}/>
                                { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                            </View>
                            <TouchableOpacity onPress={this.signIn} disabled={this.state.username != null ? false : true} >
                                    <View style={[styles.boxButton, this.state.username!=null?{backgroundColor: colors.primary}:{backgroundColor: colors.gray}]}>
                                        <Text style={styles.txtSign}>ENVIAR</Text>
                                    </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Finish'); this.setState({ screen: 'Finish' }) }}>
                            <Text>VER Finish</Text>
                        </TouchableOpacity>
                </View>
            </View>
        );
    }
} 
