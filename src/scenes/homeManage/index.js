import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Linking ,AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles';
// import modal_styles from '../regulamento/styles';
// import formLojista from '../formLojista/styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import SmallProfile from './components/smallprofile';
import LastUpdate from './components/lastupdate';
import ListCat from './components/listCat';
// import Button from '../../components/button';
import Loading from '../../components/loading';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { colors, metrics, fonts } from '../../styles';

import Card from './components/card';
import CardFooter from './components/cardfooter';

import api from '../../services/api';
import rest from '../../services/rest';

export default class HomeManage extends Component {
    static navigationOptions = {
        title: 'products',
        headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
    };
    
    state = {
        accessFirst: true,
        nameLojista: null,
        emailLojista: null,
        celularLojista: null,
        passwordLojista: null,
        dataSource: null,
        typeUser: null,
        user:{
            name: null
        },
        isLoading: true,
        modalScene: 'regulamento'
    };
    
    constructor (){ 
        super();
        this.componentDidMount();
    }
    
    isValid() {
        // isValid method returns if the inputed value is valid.
        // Ex: if you input 40/02/1990 30:20:20, it will return false
        //	   because in this case, the day and the hour is invalid.
        let valid = this.myDateText.isValid();
        
        // get converted value. Using type=datetime, it returns the moment object.
        // If it's using type=money, it returns a Number object.
        let rawValue = this.myDateText.getRawValue();
    }
    
    componentDidMount(){
        this.firstAccess();
        this.getData();
    }

    getData(){
        rest.get('/public/infos').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                user: rest.user,
                typeUser: rest.user.role
            });
        })
    }
    
    firstAccess() {
        let firstAccess = null;
        
        rest.get('/users/me').then((rest)=>{
            console.log(rest.user.first_access);
            firstAccess = rest.user.first_access;
            this.setState({accessFirst: firstAccess})
        });
    }
    
    modalFirst() {
        if(this.state.accessFirst) {
            return (
                <FirstVideo />
            )
        }
    }
    
    sendLojista() {
        if(this.state.nameLojista !== null && this.state.emailLojista !== null && this.state.celularLojista !== null) {
            let lojista = JSON.stringify({
                name: this.state.nameLojista,
                email: this.state.emailLojista,
                phone: this.state.celularLojista,
                password: this.state.passwordLojista,
                first_access: 0,
            });
            
            console.log(lojista);
            rest.post('/users/edit/me', lojista).then((rest)=>{
                console.log(rest);
            });
            
            Alert.alert(
                "Obrigado!",
                "Seus dados foram atualizados com sucesso.",
                [
                    {text: 'OK', onPress: () => {this.setState({visibleModal: false, modalScene: 'home'});this.getData();}}
                ],
                { cancelable: false }
            )
        } else {
            Alert.alert(
                "Algo aconteceu!",
                "Nem todos os campos foram preenchido corretamente.",
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')}
                ],
                { cancelable: false }
            )
        }
    }
    
    agreeTerms(){
        console.log('click reg')
        console.log(this.state.typeUser)
        this.setState({
            visibleModal: false,
            modalScene: 'form'
        });
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
                {this.modalFirst()}
                <ScrollView style={styles.scrollview}>
                    <View style={styles.contentImage}>
                        <Image style={styles.image} source={require('../../../assets/img/banner3.png')} />
                    </View>
                    
                    <SmallProfile user={this.state.user}/>
                    {/* <RankingBox user={this.state.user}/> */}
                    <LastUpdate/>

                    <Card color={'#14CC82'}>
                        <ListCat categoria={'VERDE'} colorBg={'#14CC82'} colorBgIcon={'#00985B'}/>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');}}>
                            <CardFooter>{'VEJA TODAS AS LOJAS DA CATEGORIA'.toUpperCase()}</CardFooter>
                        </TouchableOpacity>
                    </Card>

                    <Card color={'#FCB415'}>
                        <ListCat categoria={'amarelo'} colorBg={'#FCB415'} colorBgIcon={'#EAA203'}/>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');}}>
                            <CardFooter>{'VEJA TODAS AS LOJAS DA CATEGORIA'.toUpperCase()}</CardFooter>
                        </TouchableOpacity>
                    </Card>

                    <Card color={'#243331'}>
                        <ListCat categoria={'preto'} colorBg={'#243331'} colorBgIcon={'#161F1E'}/>

                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');}}>
                            <CardFooter>{'VEJA TODAS AS LOJAS DA CATEGORIA'.toUpperCase()}</CardFooter>
                        </TouchableOpacity>
                    </Card>
                
                </ScrollView>
            </View>
        );
    }
}


