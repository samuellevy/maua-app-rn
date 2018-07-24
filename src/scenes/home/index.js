import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
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

export default class Home extends Component {
  static navigationOptions = {
    title: 'products',
    headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
  };
  
  state = {
    accessFirst: true,
    nameLojista: null,
    emailLojista: null,
    celularLojista: null,
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
  
    componentDidMount(){
        this.firstAccess();
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
            console.log('send');
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
                //first_access: 0,
            });
            
            console.log('sending');
            console.log(lojista);
            rest.post('/users/edit/me', lojista).then((rest)=>{
                console.log('send');
                console.log(rest);
            });

            this.setState({visibleModal: false, modalScene: 'home'})
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
  
  render() {
    if(this.state.isLoading){
      return(
        <Loading/>
      )
    }
    if(this.state.accessFirst && this.state.modalScene == 'regulamento'){
      return(
        <View>
          <Modal animationType="fade"      
            transparent={true}
            visible={this.state.visibleModal}
            onRequestClose={() => { this.visibleModal(false); } }> 
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
    if(this.state.typeUser == 'Lojista' && this.state.modalScene == "form"){
      return(
        <View style={formLojista.container} >
              <View style={formLojista.contentModal}>
                  <View style={formLojista.modalTop}>
                      <View style={formLojista.boxTitleTop}>
                          <Text style={formLojista.titleTop}>ATUALIZE SEUS DADOS</Text>
                      </View>
                  </View>

                  <View style={formLojista.modalBottom}>
                      <ScrollView style={formLojista.scrollview}>
                          <View style={formLojista.contentForm}>
                              <View style={formLojista.boxInput}> 
                                  <Text style={formLojista.inputText}>Nome</Text>
                                  <TextInput style={formLojista.input} underlineColorAndroid='transparent' placeholder={"Digite seu nome"} onChangeText={(nameLojista) => this.setState({nameLojista})} value={this.state.nameLojista} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                              </View>
                              <View style={formLojista.boxInput}> 
                                  <Text style={formLojista.inputText}>E-mail</Text>
                                  <TextInput style={formLojista.input} underlineColorAndroid='transparent' placeholder={"Digite seu email"} onChangeText={(emailLojista) => this.setState({emailLojista})} value={this.state.emailLojista} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                              </View>
                              <View style={formLojista.boxInput}> 
                                  <Text style={formLojista.inputText}>Celular</Text>
                                  <TextInput style={formLojista.input} underlineColorAndroid='transparent' placeholder={"Digite seu celular"} onChangeText={(celularLojista) => this.setState({celularLojista})} value={this.state.celularLojista} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                              </View>
                          </View>
                      </ScrollView>

                      <View style={formLojista.contentBtn}>
                          <TouchableOpacity style={formLojista.acessMod} onPress={() => {this.sendLojista()}}>
                              <Text style={formLojista.textBtn}>ATUALIZAR</Text> 
                          </TouchableOpacity> 
                      </View>
                  </View> 
              </View>
        </View>
      )
    }
    
    return (
      <View style={styles.container}>
        {/* <FirstVideo /> */}
        {this.modalFirst()}
        <ScrollView style={styles.scrollview}>
            
            <View style={styles.contentImage}>
                <Image
                style={styles.image}
                source={require('../../../assets/img/banner3.png')}
                />
            </View>
            
            <SmallProfile user={this.state.user}/>
            <RankingBox user={this.state.user}/>
            <LastUpdate/>
            
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
            
            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Curso');}}>
                <Card title={'Blog'} icon={'public'} color={colors.purple}>
                    <Blog item={this.state.dataSource.post}/>
                    <View style={{paddingTop: 10, paddingBottom: 20}}>
                        <TouchableOpacity onPress={this.signIn}>
                            <Button title={'Ir para o Blog'} size={60} color={colors.purple}/>
                        </TouchableOpacity>
                    </View>
                </Card>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AboutCourse'); }}>
                <Card title={'Sobre o Programa'} icon={'info-outline'} color={colors.dark}>
                    <About item={this.state.dataSource.page}/>
                    <CardFooter>{'Saiba mais'.toUpperCase()}</CardFooter>
                </Card>
            </TouchableOpacity>
            
        </ScrollView>
      </View>
    );
  }
}


