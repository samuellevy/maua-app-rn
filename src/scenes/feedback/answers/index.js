import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../styles';

import { View } from 'react-native';
import Title from '../../../components/title/primary';
import Button from '../../../components/button';

import styles from './styles';
import api from '../../../services/api';

export default class Answers extends Component {
    state = {
        message: null,
        question: [],
        errorMessage: '',
        paramsData: [],
    };

    constructor (){
        super();
        this.getUserData();
    }
 
    getUserData = async () => {
        try{
            const response = await api.get('/questions/get/2');
            var question = response.data.question;
            
            this.setState({question: response.data.question});
        } catch (response){
            console.log("catch")
            this.setState({ errorMessage: response.data.message });
        }
        console.log('vai comecar');
        console.log(this.state.params);
    }

    formAsk() {
        return(
            <View style={styles.Answers}>
                {this.state.question.map((answer, index) => {
                    return (
                        <View key={'ask_'+index}>
                            <Text style={styles.textAnswers}>{answer.title}</Text>
                            
                            <View>
                                
                                {answer.options.map((option, index) => {
                                    return (
                                        <View style={styles.item} key={'option_'+index}>
                                            <MaterialIcon name={(index == answer.value)?"check-box":"crop-square"} size={13} style={(index !== answer.value)?styles.iconCheck:styles.iconCheckSelect}></MaterialIcon>
                                            <Text style={(index !== answer.value)?styles.textAsk:styles.textAskSelect} >{option.title}</Text>
                                        </View>
                                    );
                                })}
                            </View>

                            <View style={styles.answersCorrect}>
                                <Text style={styles.textCorrectAnswers}>Acertou! O Cimento Mauá possui secagem rápida e qualidade superior, facilitando o manuseio para obras internas e acabamentos.</Text>
                            </View>
                        </View>
                    )
                })}
            </View>
        )
    }

    render() { 

        // var teste = this.props.navigation.state.params;
        //console.log(teste)

        return ( 
            <ScrollView style={styles.scrollContent}>
                <View style={styles.container}>
                    <Title textContent={"CURSO DE CAPACITAÇÃO"} />
                    <Text style={styles.title}>Módulo 03: Cimento CPII</Text>
                    
                    <View style={styles.formAnswers}>

                        <View style={styles.Answers}>
                            {this.formAsk()}
                        </View>
                    </View>
                </View> 
            </ScrollView>
        );
    }
}