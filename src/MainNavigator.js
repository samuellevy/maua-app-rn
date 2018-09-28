// React components
import React from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation';
import { View, Text} from 'react-native';

// Load components
import Nav from './components/navigation';
import Header from './components/header';

// Load main scene
import Login from './scenes/login';

// Logged scenes
import Home from './scenes/home';
import Curso from './scenes/curso';
import Performance from './scenes/performance';
import Ranking from './scenes/ranking';
import Quiz from './scenes/quiz';
import Contact from './scenes/contact';
import More from './scenes/more';
import Rule from './scenes/rule';
import Splash from './scenes/splash';
import Password from './scenes/password';
import Finish from './scenes/password/finish';
import FeedBack from './scenes/feedback';
import Answers from './scenes/questions/answers'; 
import Profile from './scenes/profile';
import Employe from './scenes/employee';
import addEmployee from './scenes/employee/addEmployee';
import AboutCourse from './scenes/aboutCourse';
import Aula from './scenes/curso/aula'; 
import Questions from './scenes/questions'; 
import FinishCourse from './scenes/finishCourse'; 
import Result from './scenes/questions/components/result'; 
import StatusSend from './scenes/statusSend';
import ValidadeCpf from './scenes/ValidadeCpf';
import FirstLogin from './scenes/firstlogin';
import HomeManager from './scenes/manager/homeManager';
import CategoryManager from './scenes/manager/categoryManager';
import StoreManager from './scenes/manager/storeManager';
import Default from './layouts/default';
import Manager from './layouts/manager';

import Form from './scenes/employee/form';
// import ModalExample from './scenes/modalExample'
import Player from './scenes/player';

// Other confs
console.disableYellowBox = true;

// Main navigator

defaultNavigator = StackNavigator({
  Splash: {screen: Splash},
  Default: {screen: Default},
  Manager: {screen: Manager},
  Login: {screen: Login}, // has a skip button that navigates to root
  Password: {screen: Password},
  Finish: {screen: Finish},
  Question: {screen: Questions},
  Result: {screen: Result},
  StatusSend: {screen: StatusSend},
  Answers: {screen: Answers},
  FinishCourse: {screen: FinishCourse},
  FirstLogin: {screen: FirstLogin},
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
  mode: 'modal',
  swipeEnabled: false,  
});

export default defaultNavigator;