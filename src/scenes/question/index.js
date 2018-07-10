import React, { Component } from 'react';

import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';

import Finish from './components/finish';

import styles from './styles';
import api from '../../services/api';

export default class Question extends Component {
    static navigationOptions = {
        header: null
    };
    state = {
        teste: '',   
        question: [],
        arrayQuest: [],
        btnSelected: 0,
        selectRespo: 0,
        confirmBtn: false,
        modalVisible: false,
        quizSelect: 0,  
        finish: false,
        titleQuestion: '',
    }
    constructor (){
        super();
        this.getUserData();
        this.state.quizSelect = 0;
        this.state.question = [];
    }
    
    getUserData = async () => {
        try{
            const response = await api.get('/questions/get/2');
            var question = response.data.question;
            
            this.setState({question: response.data.question});
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    getTitle() {
        var idArray = this.state.quizSelect;
        return (
            <View>
                {this.state.question.map((quest, index) => {
                    if(index == idArray) {
                        return <Text key={index} style={styles.titleQuizBox}>{quest.title}</Text>
                    }
                })}
            </View>
        ) 
    }   

    getAnswer() {  
        return (
            <View style={{width: '100%'}}>
                {this.state.question.map((quest, index) => {
                    let idBtn = 0;  
                    return ( 
                        <View style={{alignItems: 'center', paddingLeft: 15,paddingRight: 15}} key={'answer_'+index}>
                            { index == this.state.quizSelect && quest.options.map(answer => {
                                return <TouchableOpacity key={answer.id} style={[styles.btnQuestion, (this.state.btnSelected== answer.id)?styles.btnQuestionSelect:styles.btnQuestion]} onPress={() => this.setState({ btnSelected: answer.id, confirmBtn: true })}><Text style={[styles.textQuestion, (this.state.btnSelected== answer.id)?styles.textQuestionSelect:'']}>{answer.title}</Text></TouchableOpacity>
                            })  
                            }
                        </View> 
                    )
                })}
            </View>
        )
    } 

    getBullet() {  
        return (
            <View style={styles.contentSlider}>
                {this.state.question.map((quest,index )=> {
                    return <View style={styles.boxIcon} key={'bullet_'+index}><MaterialIcon name="brightness-1" size={10} style={(this.state.quizSelect == index)?styles.iconSliderSelect:styles.iconSlider}></MaterialIcon></View>
                })}
            </View>
        )
    }

    clickNext() {    
        if(this.state.quizSelect == this.state.question.length -1) {
            var arrayExemp = this.state.arrayQuest.concat({id: this.state.quizSelect, value: this.state.btnSelected});
            this.setState({arrayQuest: arrayExemp})

            //this.state.arrayQuest.push({id: this.state.quizSelect, value: this.state.btnSelected})
            var data = this.state.arrayQuest;
            //this.finishFunction(true, data)
            this.setState({finish: true})
        } else { 
            this.setState({quizSelect: this.state.quizSelect + 1})

            var arrayExemp = this.state.arrayQuest.concat({id: this.state.quizSelect, value: this.state.btnSelected});
            this.setState({arrayQuest: arrayExemp})
            // this.state.arrayQuest.push({id: this.state.quizSelect, value: this.state.btnSelected})
            
            
            this.setState({confirmBtn: false})
        }
    }  

    finishFunction() {
        if(this.state.finish) {
            console.log(this.state.arrayQuest)
            return <Finish navigator={() => {this.props.navigation.navigate('Answers');}} />
        }
    } 
    
    render() {
        return (
            // <View style={{margin: 40}}>
            //     <Text>{this.state.teste}ds</Text>
            // </View>
            <View style={styles.contentAll}> 
                <View style={styles.contentModal}>
                    <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                    </TouchableOpacity>

                    <View style={styles.titleModulo}>
                        <Text style={styles.titleQuiz}>MÓDULO 03: CIMENTO CPII</Text>
                    </View>

                    <View style={styles.contentQuiz}>
                        <View style={styles.content}> 
                            {this.getTitle()}

                            {this.getAnswer()} 

                            <View style={styles.boxBtn}>
                                <TouchableOpacity style={[styles.btnConfirm, (this.state.btnSelected? styles.btnConfirmOk:'')]}  onPress={() => {this.clickNext()}}>
                                    <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {this.finishFunction()}

                    {this.getBullet()} 
                </View>
            </View>
        );
    }
}
