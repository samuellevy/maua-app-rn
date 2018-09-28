import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Linking ,AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles';
import modal_styles from '../regulamento/styles';
import formLojista from '../formLojista/styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import SmallProfile from './components/smallprofile';
import RankingBox from './components/rankingbox';
import LastUpdate from './components/lastupdate';
import Performance from './components/performance';
import Course from './components/course';
import Blog from './components/blog';
import About from './components/about';
import Button from '../../components/button';
import FirstVideo from '../../scenes/firstVideo';
import Loading from '../../components/loading';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { colors, metrics, fonts } from '../../styles';

import Card from './components/card';
import CardFooter from './components/cardfooter';

import api from '../../services/api';
import rest from '../../services/rest';

import ModalPorcentagem from '../../components/modal/modalPorcentagem';
import ModalRank from '../../components/modal/modalRank';

export default class Home extends Component {
    static navigationOptions = {
        // header: null,
        title: 'Home',
        header: (<Header/>)
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
        modalScene: 'regulamento',
        secureText: true,
        modalPush: false,
        push: [],
        cpf: null,
    };
    
    constructor (){ 
        super();
        this.forceUpdate();
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
                typeUser: rest.user.role,
                modalPush: rest.push.exist,
                push: rest.push,
                cpf_validated: rest.user.cpf
            });
            console.log(rest.user);
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

    modalPush(){
        if(this.state.modalPush) {
            return(
                <View>
                    <ModalRank data={this.state.push}/>
                </View>
            )
        }
    }
    
    sendLojista() {
        if(
            this.state.nameLojista == null || 
            this.state.emailLojista == null ||
            this.state.celularLojista == null ||
            this.state.passwordLojista == null ||
            this.state.nameLojista == '' || 
            this.state.emailLojista == '' ||
            this.state.celularLojista == '' ||
            this.state.passwordLojista == ''
        ) {
            Alert.alert(
                "Algo aconteceu!",
                "Nem todos os campos foram preenchido corretamente.",
                [
                    {text: 'OK', onPress: () => console.log('OK Pressed')}
                ],
                { cancelable: false }
            )
            
        } else {
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

    validarCPF(cpf) {
        console.log('cpf');
        console.log(cpf)
        if(cpf==null){
            cpf = '';
        }
        cpf = cpf.replace(/[^\d]+/g, '');

        if (cpf == '' || cpf == null) return false;
        // Elimina CPFs invalidos conhecidos	
        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;
        // Valida 1o digito	
        add = 0;
        for (i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;
        // Valida 2o digito	
        add = 0;
        for (i = 0; i < 10; i++)
            add += parseInt(cpf.charAt(i)) * (11 - i);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }

    postDataCpf(cpf){
        let user = JSON.stringify({
            cpf: this.state.cpf,
        });

        try{
            rest.post('/users/edit/me', user).then((rest)=>{
                if(rest.success) {
                    Alert.alert(
                        "Obrigado!",
                        "Seus dados foram atualizados com sucesso.",
                        [
                            {text: 'OK', onPress: () => {this.setState({visibleModal: false, modalScene: 'home'});this.getData();}}
                        ],
                        { cancelable: false }
                    )
                }
            });
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }


    componentWillReceiveProps(){
        this.forceUpdate();
        this.getData();
    }

    render() {
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        if(this.state.accessFirst && this.state.modalScene == 'regulamento'){
            return(
                <View>
                    <Modal animationType="fade" transparent={true} visible={this.state.visibleModal} onRequestClose={() => { this.visibleModal(false); } }> 
                        <View style={modal_styles.contentModal}>
                            <View style={modal_styles.modalTop}>
                                <View style={modal_styles.boxTitleTop}>
                                    <Text style={modal_styles.titleTop}>REGULAMENTO</Text>
                                </View>
                            </View>
                            
                            <View style={modal_styles.modalBottom}>
                                <ScrollView style={modal_styles.scrollview}>
                                    <Text style={modal_styles.textReg}>{this.state.dataSource.rules.content}</Text>
                                </ScrollView>
                                
                                <View style={modal_styles.contentBtn}>
                                    <TouchableOpacity style={modal_styles.acessMod} onPress={() => {this.agreeTerms()}}>
                                        <Text style={modal_styles.textBtn}>ESTOU DE ACORDO</Text> 
                                    </TouchableOpacity> 
                                </View>
                            </View> 
                        </View>
                    </Modal>
                </View>
            )
        }
        if(this.state.modalScene == "form"){
            return(
                <View style={formLojista.container} >
                    <Modal>
                        <ScrollView style={formLojista.scrollview}>
                            <View style={formLojista.contentModal}>
                                <View style={formLojista.modalTop}>
                                    <View style={formLojista.boxTitleTop}>
                                        <Text style={formLojista.titleTop}>ATUALIZE SEUS DADOS</Text>
                                    </View>
                                </View>
                                
                                <View style={formLojista.modalBottom}>
                                    <View style={formLojista.contentForm}>
                                        <View style={formLojista.boxInput}> 
                                            <Text style={formLojista.inputText}>Nome</Text>
                                            <TextInput style={formLojista.input} underlineColorAndroid='transparent' placeholder={"Digite seu nome"} onChangeText={(nameLojista) => this.setState({nameLojista})} value={this.state.nameLojista} placeholderTextColor={colors.textColor} returnKeyType={'done'} autoCapitalize={'words'} autoCorrect={false} />
                                        </View>
                                        <View style={formLojista.boxInput}> 
                                            <Text style={formLojista.inputText}>E-mail</Text>
                                            <TextInput style={formLojista.input} underlineColorAndroid='transparent' placeholder={"Digite seu email"} onChangeText={(emailLojista) => this.setState({emailLojista})} value={this.state.emailLojista} placeholderTextColor={colors.textColor} returnKeyType={'done'} autoCapitalize={'none'}  autoCorrect={false} />
                                        </View>
                                        <View style={formLojista.boxInput}> 
                                            <Text style={formLojista.inputText}>Celular</Text>
                                            <TextInputMask type={'cel-phone'} style={formLojista.input} underlineColorAndroid='transparent' placeholder={"Digite seu celular"} onChangeText={(celularLojista) => {this.setState({celularLojista});}} value={this.state.celularLojista} placeholderTextColor={colors.textColor} returnKeyType={'done'} />
                                        </View>
                                        <View style={formLojista.boxInput}> 
                                            <Text style={formLojista.inputText}>Nova Senha</Text>
                                            <TextInput style={formLojista.input} underlineColorAndroid='transparent' placeholder={"Digite sua nova senha"} onChangeText={(passwordLojista) => this.setState({passwordLojista})} value={this.state.passwordLojista} placeholderTextColor={colors.textColor} returnKeyType={'done'} autoCapitalize={'none'}  autoCorrect={false}  secureTextEntry={this.state.secureText} />
                                            <MaterialIcon name="visibility" size={20} style={styles.inputIconRight} onPress={() => { this.state.secureText ? this.setState({ secureText: false }) : this.setState({ secureText: true })}}/>
                                        </View>
                                    </View>
                                    
                                    <View style={formLojista.contentBtn}>
                                        <TouchableOpacity style={formLojista.acessMod} onPress={() => {this.sendLojista()}}>
                                            <Text style={formLojista.textBtn}>ATUALIZAR</Text> 
                                        </TouchableOpacity> 
                                    </View>
                                </View> 
                            </View>
                        </ScrollView> 
                    </Modal>
                </View>
            )
        }

        if(!this.state.cpf_validated){
            return(
                <Modal>
                    <View style={styles.cpf_container}>
                        <ScrollView>
                            <View style={styles.cpf_body}>
                                <Text style={styles.cpf_txtTitle}>Valide seu CPF</Text>
                                <Text style={styles.cpf_txtDescription}>É muito importante que o CPF seja preenchido corretamente, pois este será utilizado em caso de premiação.</Text>
                                <TextInputMask type={'cpf'} style={styles.cpf_input} onChangeText={(cpf) => this.setState({ cpf })} placeholder='Digite seu CPF' value={this.state.cpf} autoCorrect={false} autoCapitalize='none' />

                                <Text style={styles.cpf_btnValidade} onPress={() => this.validarCPF(this.state.cpf)?this.postDataCpf(this.state.cpf):alert("CPF inválido")}>Validar</Text>
                            </View>
                        </ScrollView>
                    </View>
                </Modal>
            )
        }
        
        return (
            <View style={styles.container}>
                {this.modalFirst()}
                {this.modalPush()}
                <ScrollView style={styles.scrollview}>
                    <View style={styles.contentImage}>
                        <Image resizeMode="contain" style={styles.image} source={require('../../../assets/img/banner3.png')} />
                        {/* <Image style={styles.image} source={require('../../../assets/img/banner3.png')} /> */}
                    </View>
                    
                    <SmallProfile user={this.state.user}/>
                    <RankingBox user={this.state.user}/>
                    <LastUpdate configs={this.state.dataSource.configs}/>
                    
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Performance');}}>
                        <Card title={'Desempenho'} icon={'today'} color={colors.blue}>
                            <Performance item={this.state.dataSource.sales} />
                            <CardFooter color={colors.blue} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }}>{'Acompanhe o desempenho da loja'.toUpperCase()}</CardFooter>
                        </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Curso');}}>
                        <Card title={'Curso de Capacitação'} icon={'video-library'} color={colors.yellow}>
                            <Course/>
                            <CardFooter>{'Ir para curso'.toUpperCase()}</CardFooter>
                        </Card>
                    </TouchableOpacity>
                    
                    <TouchableOpacity activeOpacity={1} onPress={() => {}}>
                        <Card title={'Blog'} icon={'public'} color={colors.purple}>
                        <Blog item={this.state.dataSource.post}/>
                            <View style={{paddingTop: 10, paddingBottom: 20}}>
                                <TouchableOpacity onPress={()=>{ Linking.openURL(this.state.dataSource.post.url)}}>
                                    <Button title={'Ir para o Blog'} size={60} color={colors.purple}/>
                                </TouchableOpacity>
                            </View>
                        </Card>
                    </TouchableOpacity>

                    {this.state.dataSource.user.role_id==7?
                    <View/>
                    :
                    <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AboutCourse'); }}>
                        <Card title={'Sobre o Programa'} icon={'info-outline'} color={colors.dark}>
                            <About item={this.state.dataSource.page}/>
                            <CardFooter>{'Saiba mais'.toUpperCase()}</CardFooter>
                        </Card>
                    </TouchableOpacity>
                    }
                    
                
                </ScrollView>
            </View>
        );
    }
}


