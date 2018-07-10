import React, { Component } from 'react';
import {  View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Post from './components/Post';
import NavIcon from '../../components/navigation/NavIcon';

export default class Posts extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Mais'} icon={'subject'}/>;
        },
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Profile')}} style={styles.profileButton}>
                    <Text> Meu profile </Text>
                </TouchableOpacity>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 30,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
    },
    profileButton:{
        backgroundColor: 'tomato',
        padding: 15
    }

});