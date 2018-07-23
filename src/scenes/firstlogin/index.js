import React, { Component } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity, AsyncStorage, ScrollView, Platform } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { colors } from '../../styles';
import api from '../../services/api';

export default class FirstLogin extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        password: null,
        secondpassword: null,
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
                password: this.state.password,
                secondpassword: this.state.password
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
            <ScrollView scrollEnabled={Platform.OS == 'ios'?false:true}>
            <View style={styles.container}>
                <View style={styles.boxHello}>
                    <Image source={require('../../../assets/img/marca2.png')} style={styles.imgMarca}/>
                </View>
                <View style={styles.boxWelcome}>
                    <Text style={styles.txtInitial}>Defina sua senha abaixo.</Text>
                    { !!this.state.errorMessage && <Text style={styles.txtError}>{ this.state.errorMessage }</Text>}
                </View>
                <View style={styles.boxLogin}>
                        <View style={styles.inputBox}>
                            <MaterialIcon name="lock" size={25} style={styles.inputIcon} />
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder='Digite sua nova senha' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={password => !!password ? this.setState({ password: password }) : this.setState({ password: null })} secureTextEntry={true} returnKeyType='done' />
                        </View>
                        <View style={styles.inputBox}>
                            <MaterialIcon name="lock" size={25} style={styles.inputIcon} />
                            <TextInput underlineColorAndroid='rgba(0,0,0,0)' style={styles.input} placeholder='Digite novamente' autoCapitalize='none' placeholderTextColor={colors.light} onChangeText={secondpassword => !!secondpassword?this.setState({secondpassword: secondpassword}):this.setState({secondpassword: null})} secureTextEntry={true} returnKeyType='done'/>
                        </View>

                        <TouchableOpacity onPress={this.signIn} disabled={this.state.password!=null&&this.state.secondpassword!=null&&this.state.password==this.state.secondpassword?false:true}>
                            <View style={[styles.boxButton, this.state.password!=null&&this.state.secondpassword!=null&&this.state.password==this.state.secondpassword?{backgroundColor: colors.primary}:{backgroundColor: colors.gray}]}>
                                <Text style={styles.txtSign}>CONFIRMAR</Text>
                            </View>
                        </TouchableOpacity>

                </View>
            </View>
            </ScrollView>
        );
    }
} 
