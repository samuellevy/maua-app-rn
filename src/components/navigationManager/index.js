import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../navigation/NavIcon';
import Header from '../header';

import styles from '../navigation/styles';

export default class Navigation extends Component {
    state={
        screen: 'home'
    }

    changeScreen = (navigation, to) => {
        navigation.navigate(to, {category:'p', owner: false});
        this.setState({screen: to});
        console.log(navigation);
    }

    render() {
    return (
        <View style={styles.container}>
            <View style={styles.navBar}>
                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'Home')}}>
                    <NavIcon title={'Home'} icon={'home'} fontIcon={false} active={this.state.screen=='Home'?true:false}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'CategoryManager');}}>
                    <NavIcon title={'Lojas'} icon={'store-mall-directory'} fontIcon={true} active={this.state.screen=='Lojas'?true:false}/>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'Ranking');}}>
                    <NavIcon title={'Ranking'} icon={'ranking'} fontIcon={false} active={this.state.screen=='Ranking'?true:false}/>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => {this.changeScreen(this.props.navigation, 'More');}}>
                    <NavIcon title={'Mais'} icon={'more'} active={this.state.screen=='More'?true:false}/>
                </TouchableOpacity>
            </View>
        </View>
    );}
}