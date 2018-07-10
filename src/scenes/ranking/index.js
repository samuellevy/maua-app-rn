import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './styles';

import WinnerCard from './components/winnercard';
import Card from './components/card';
import { metrics, colors } from '../../styles';

export default class Ranking extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Ranking'} icon={'star'} />;
        },
    };

    render() { 
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            {'Ranking das lojas'.toUpperCase()}
                        </Text>
                        <WinnerCard store='Casa Fort Distribuidora' score='430'/>
                        <View style={styles.otherPlaces}>
                           <Card url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status='non-user' title='2º Lugar' image='2-ranking' store='Duas Irmãs Materiais' score='420'/>
                           <Card url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status='non-user' title='3º Lugar' image='3-ranking' store='Fornecedora Caçula' score='380'/>
                           <Card url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status='user' title='4º Lugar' image='4-ranking' store='Loja Golveia Construção' score='360'/>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


