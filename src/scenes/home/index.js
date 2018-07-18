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
    user:{
      name: null
    },
    isLoading: true,
    modalScene: 'regulamento'
  };
  
  constructor (){ 
    super();
    this.firstAccess();
  }
  
  componentDidMount(){
    rest.get('/public/infos').then((rest)=>{
      this.setState({
        isLoading: false,
        dataSource: rest,
        user: rest.user
      });
    })
  }

  firstAccess = async () => {
    try {
      let accessFirst = await AsyncStorage.getItem('accessFirst')
      if(accessFirst == 'true') {
        this.setState({accessFirst: false})
      } else {
        AsyncStorage.setItem('accessFirst', 'true'); 
        this.setState({accessFirst: true})
      }
    } catch(error) {
      console.log(error)
    }
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
                            <Text style={modal_styles.textReg}>Curabitur eleifend, turpis sit amet dignissim aliquet, nisl arcu interdum nibh, vitae vestibulum nisl lacus varius quam. Phasellus lobortis iaculis sem non faucibus. In pharetra pellentesque scelerisque. Aliquam et mi imperdiet, accumsan dui nec, scelerisque mauris. Etiam gravida egestas dolor, at semper nulla euismod sit amet. Quisque sit amet nulla varius, sagittis mi at, aliquam lacus. Praesent at urna orci. Nam pretium dapibus purus, sit amet aliquam arcu sagittis id. Quisque vel tempus orci. Cras quis dolor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ac neque id tortor ornare finibus sit amet quis mauris. In in ligula ac ipsum convallis finibus vitae quis nibh. Vivamus varius, enim vel efficitur tempus, ex sem aliquet odio, non gravida leo quam non quam. </Text>
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

    if(this.state.dataSource.role == 'Lojista' && this.state.modalScene == "form"){
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


