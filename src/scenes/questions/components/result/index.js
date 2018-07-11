import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

export default class Result extends Component {
    static navigationOptions = {
        header: null
    };
    
    render() {
        return (
            
                <View style={styles.card}>
                    <View style={styles.imageBox}>
                        <Image style={styles.image} source={require('../../../../../assets/img/resultBanner.png')}/>
                    </View>
                    <View style={styles.congratBox}> 
                        <Text style={styles.congratText}><Text style={{ fontWeight: "bold" }}>Parabéns!</Text></Text>
                        <Text style={styles.congratText}>Você acertou <Text style={{ fontWeight: "bold" }}>80%</Text> do teste!</Text>
                    </View>
                    <View style={styles.contentBox}>
                        <Text style={styles.cardTitle}>Chame todo mundo!</Text>
                        <Text style={styles.cardText}>Uma maneira de acumular pontos é com todos os funcionários completando o módulo do mês. Não dê bobeira e incentive seus colegas!</Text>
                        <TouchableOpacity>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>{"Continuar".toUpperCase()}</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            
        );
    }
}
