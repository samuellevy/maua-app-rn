import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import rest from '../../../../services/rest';

export default class Result extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        }
    }

    sendData(dataAnswers){
        let answers = JSON.stringify({
            answers: dataAnswers
          });
        
        console.log('sending');
        console.log(answers);
        rest.post('/questions/answer', answers).then((rest)=>{
            console.log(rest);
        });
    }

    confirm(navigation, dataSource, dataAnswers){
        this.sendData(dataAnswers);
        navigation.navigate('Answers', {dataSource: dataSource, dataAnswers: dataAnswers});
    }
    
    render() {
        let percent = this.props.percent;
        let navigation = this.props.navigation;
        let dataSource = this.props.dataSource;
        let dataAnswers = this.props.dataAnswers;

        console.log('dataAnswers');
        console.log(percent);

        return (
            <View style={styles.card}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require('../../../../../assets/img/resultBanner.png')}/>
                </View>
                <View style={styles.congratBox}> 
                    <Text style={styles.congratText}><Text style={{ fontWeight: "bold" }}>Parabéns!</Text></Text>
                    <Text style={styles.congratText}>Você acertou <Text style={{ fontWeight: "bold" }}>{percent}%</Text> do teste!</Text>
                </View>
                <View style={styles.contentBox}>
                    <Text style={styles.cardTitle}>Chame todo mundo!</Text>
                    <Text style={styles.cardText}>Uma maneira de acumular pontos é com todos os funcionários completando o módulo do mês. Não dê bobeira e incentive seus colegas!</Text>
                    <TouchableOpacity onPress={() => {this.confirm(navigation, dataSource, dataAnswers)}}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>{"Continuar".toUpperCase()}</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }
}
