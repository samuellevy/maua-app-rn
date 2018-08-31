import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from './NavIcon';
import Header from '../header';

import styles from './styles';

export default class Navigation extends Component {
    state={
        screen: 'Home'
    }

    changeScreen = (navigation, to) => {
        navigation.navigate(to);
        this.setState({screen: to});
        console.log(navigation);
    }

    render() {
    return ( 
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'Home')}}>
                    <NavIcon title={'Home'} icon={'home'} active={this.state.screen=='Home'?true:false}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'Curso');}}>
                    <NavIcon title={'Curso'} icon={'student'} active={this.state.screen=='Curso'?true:false}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'Performance');}}>
                    <NavIcon title={'Desempenho'} icon={'performance'} active={this.state.screen=='Performance'?true:false}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'Ranking');}}>
                    <NavIcon title={'Ranking'} icon={'ranking'} active={this.state.screen=='Ranking'?true:false}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'More');}}>
                    <NavIcon title={'Mais'} icon={'more'} active={this.state.screen=='More'?true:false}/>
                </TouchableOpacity>
            </View>
        </View>
    );}
}