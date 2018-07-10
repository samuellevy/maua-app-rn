import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

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
import Regulamento from '../../scenes/regulamento';
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
    accessFirst: '',
    user:{
      name: null
    },
    isLoading: true
  };
  
  constructor (){ 
    super();
    this.firstAccess();
  }
  
  componentDidMount(){
    rest.get('/public/home').then((rest)=>{
      this.setState({
        isLoading: false,
        dataSource: rest.user,
        user: rest.user
      });
    })
  }

  firstAccess = async () => {
    try {
      let accessFirst = await AsyncStorage.getItem('accessFirst')
      if(accessFirst == 'true') {
        this.setState({accessFirst: false})
        console.log('Ja entro')
      } else {
        AsyncStorage.setItem('accessFirst', 'true'); 
        this.setState({accessFirst: true})
        console.log('nunca entro')
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
  
  regulamento() {
    if(this.state.accessFirst) {
      return (
        <Regulamento />
      )
    }
  }
  
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
        <ActivityIndicator/>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        {/* <FirstVideo /> */}
        {this.modalFirst()}
        {this.regulamento()}
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
                    <Performance/>
                    <CardFooter color={colors.blue} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }}>{'Acompanhe o desempenho da loja'.toUpperCase()}</CardFooter>
                </Card>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Curso');}}>
                <Card title={'Curso de Capacitação'} icon={'video-library'} color={colors.yellow}>
                    <Course/>
                    <CardFooter>{'Ir para o módulo'.toUpperCase()}</CardFooter>
                </Card>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('Curso');}}>
                <Card title={'Blog'} icon={'public'} color={colors.purple}>
                    <Blog/>
                    <View style={{paddingTop: 10, paddingBottom: 20}}>
                        <TouchableOpacity onPress={this.signIn}>
                            <Button title={'Ir para o Blog'} size={60} color={colors.purple}/>
                        </TouchableOpacity>
                    </View>
                </Card>
            </TouchableOpacity>
            
            <TouchableOpacity activeOpacity={1} onPress={() => { this.props.navigation.navigate('AboutCourse'); }}>
                <Card title={'Sobre o Programa'} icon={'info-outline'} color={colors.dark}>
                    <About/>
                    <CardFooter>{'Saiba mais'.toUpperCase()}</CardFooter>
                </Card>
            </TouchableOpacity>
            
        </ScrollView>
      </View>
    );
  }
}


