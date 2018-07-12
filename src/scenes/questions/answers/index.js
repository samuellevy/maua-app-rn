import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../../styles';

import { View } from 'react-native';
import Title from '../../../components/title/primary';
import Button from '../../../components/button';
import CommentBox from './commentbox';

import styles from './styles';
import api from '../../../services/api';

export default class Answers extends Component {
    state = {
        message: null,
        questions: [],
        errorMessage: '',
        paramsData: [],
        dataSource: [],
        dataAnswers: []
    };

    constructor (){
        super();
        this.getData();
    }

    componentDidMount(){
        let navigation = this.props.navigation;
        let dataSource = this.props.dataSource;
        let dataAnswers = this.props.dataAnswers;
        const {params} = this.props.navigation.state;
        
        this.setState({dataSource: dataSource, dataAnswers: dataAnswers});
    }
 
    getData = async () => {
        try{
            const response = await api.get('/questions/get/2');
            console.log(response);
            var questions = response.data.questions;
            
            this.setState({questions: response.data.questions});
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
                {/* {this.state.questions.map((answer, index) => {
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
                })} */}
            </View>
        )
    }

    render() {
        // const {params} = this.props.navigation.state;
        // data = params[];
        return ( 
            <ScrollView style={styles.scrollContent}>
                <View style={styles.container}>
                    <Title textContent={"CURSO DE CAPACITAÇÃO"} />
                    <Text style={styles.title}>Módulo 03: Cimento CPII</Text>
                    
                    <View style={styles.formAnswers}>

                        <View style={styles.Answers}>
                        <View style={styles.Answers}>
                            {this.state.dataSource.map((question, question_index) => {
                                return (
                                    <View key={'ask_'+question_index}>
                                        <Text style={styles.textAnswers}>{question.title}</Text>
                                        
                                        <View>    
                                            {question.options.map((option, option_index) => {
                                                return (
                                                    <View style={styles.item} key={'option_'+option_index}>
                                                        {/* <MaterialIcon name={(option_index == question.value)?"check-box":"crop-square"} size={13} style={(option_index !== question.value)?styles.iconCheck:styles.iconCheckSelect}></MaterialIcon> */}
                                                        <MaterialIcon name={(option_index == this.state.dataAnswers[question_index].value)?"check-box":"crop-square"} size={13} style={(option_index !== question.value)?styles.iconCheck:styles.iconCheckSelect}></MaterialIcon>
                                                        <Text style={(option_index !== question.value)?styles.textAsk:styles.textAskSelect}> {option.title}</Text>
                                                    </View>
                                                );
                                            })}
                                        </View>
                                        <CommentBox status={question.value==this.state.dataAnswers[question_index].value?1:0} data={question}/>
                                    </View>
                                )
                            })}
                        </View>
                        </View>
                    </View>
                </View> 
            </ScrollView>
        );
    }
}