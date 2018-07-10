import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Home from '../../scenes/home';
import Curso from '../../scenes/cursoStyle/listCurso';
import Performance from '../../scenes/performance';
import Ranking from '../../scenes/ranking';
import Posts from '../../scenes/posts';
import Quiz from '../../scenes/quiz';

import Nav from '../../components/navigation';

export default TabNavigator({
  Home: { screen: Home, navigationOptions: { tabBarVisible: true } },
  Curso: { screen: Curso, navigationOptions: { tabBarVisible: true }  },
  Performance: { screen: Performance, navigationOptions: { tabBarVisible: true }  },
  Ranking: { screen: Ranking, navigationOptions: { tabBarVisible: true }  },
  Quiz: { screen: Quiz, navigationOptions: { tabBarVisible: true }  },
},
{
  tabBarComponent: ({navigation}) => <Nav navigation={navigation} />,
  tabBarPosition: 'bottom',
  animationEnabled: true, mode: "card",
  navigationOptions:{
  },
});