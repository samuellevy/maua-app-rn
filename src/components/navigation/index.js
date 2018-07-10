import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from './NavIcon';
import Header from '../header';

import styles from './styles';

export default class Navigation extends Component {
    state={
        screen: 'home'
    }

    changeScreen = () => {
        console.log('tes');
    }

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home'); this.setState({screen: 'home'})}}>
                    <NavIcon title={'Home'} icon={'home'} active={this.state.screen=='home'?true:false}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Curso'); this.setState({screen: 'curso'})}}>
                    <NavIcon title={'Curso'} icon={'student'} active={this.state.screen=='curso'?true:false}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Performance'); this.setState({screen: 'performance'})}}>
                    <NavIcon title={'Desempenho'} icon={'performance'} active={this.state.screen=='performance'?true:false}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Ranking'); this.setState({screen: 'ranking'})}}>
                    <NavIcon title={'Ranking'} icon={'ranking'} active={this.state.screen=='ranking'?true:false}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('More'); this.setState({screen: 'more'})}}>
                    <NavIcon title={'Mais'} icon={'more'} active={this.state.screen=='more'?true:false}/>
                </TouchableOpacity>
            </View>
        </View>
    );}
}