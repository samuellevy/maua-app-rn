import React, { Component } from 'react';

import { View } from 'react-native';
import { createBottomTabNavigator, TabNavigator, StackNavigator } from 'react-navigation';

// Load components
import Nav from '../../components/navigation';
import Header from '../../components/header';

// Load scenes
import Home from '../../scenes/home';
import Curso from '../../scenes/curso';
import Performance from '../../scenes/performance';
import Ranking from '../../scenes/ranking';
import Quiz from '../../scenes/quiz';
import Contact from '../../scenes/contact';
import More from '../../scenes/more';
import Rule from '../../scenes/rule';
import Splash from '../../scenes/splash';
import Password from '../../scenes/password';
import Finish from '../../scenes/password/finish';
import FeedBack from '../../scenes/feedback';
import Answers from '../../scenes/questions/answers'; 
import Profile from '../../scenes/profile';
import Employe from '../../scenes/employee';
import addEmployee from '../../scenes/employee/addEmployee';
import AboutCourse from '../../scenes/aboutCourse';
import Aula from '../../scenes/curso/aula'; 
import Questions from '../../scenes/questions'; 
import FinishCourse from '../../scenes/finishCourse'; 
import Result from '../../scenes/questions/components/result'; 
import StatusSend from '../../scenes/statusSend';
import FirstLogin from '../../scenes/firstlogin';
import HomeManager from '../../scenes/manager/homeManager';
import CategoryManager from '../../scenes/manager/categoryManager';
import StoreManager from '../../scenes/manager/storeManager';
// import styles from './styles';

class Default extends Component {
  static navigationOptions = {
    // header: null,
    tabBarIcon: ({ focused, tintColor }) => {
      return <NavIcon title={'Curso'} icon={'school'}/>;
    },
  };
  
  render() {
    return (
      <View/>
    );
  }
}

const DefaultStack = StackNavigator({
  Home: HomeManager,
  Curso: Curso,
  Aula: Aula,
  Performance: {screen: Performance},
  Ranking: {screen: Ranking},
  More: {screen: More},
  Profile: Profile,
  Employe: Employe,
  AboutCourse: AboutCourse,
  Rule: Rule,
  Contact: Contact,
});

const CursoStack = StackNavigator({
  Aula: Aula
});

const RootScene = TabNavigator({
  Home: {screen: DefaultStack},
  Curso: {screen: CursoStack},
}, {
  tabBarComponent: ({navigation}) => <Nav navigation={navigation} router={RootScene.router} />,
  initialRouteName: 'Home',
  animationEnabled: true,
  mode: "card",
  tabBarPosition: 'bottom',
  swipeEnabled: false,
});
// RootScene.navigationOptions = {
//   header: ({ goBack, navigation }) => (<Header navigation={navigation}/>),
//   mode: "card",
//   tabBarPosition: 'bottom',
// };

export default RootScene;