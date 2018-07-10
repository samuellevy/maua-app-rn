import React, { Component } from 'react';

import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../../styles';


// nao sendo usado 

export default class Question extends Component {
    render() {
        let question = this.props.question;
        console.log(question);
        return (
            <View style={styles.contentQuiz}>
                <View style={styles.content}> 
                    <Text style={styles.titleQuizBox}>{question.title}</Text>
                    <View style={{width: '100%'}}>
                    {question.options.map((item, key) => (
                        <View style={{alignItems: 'center', paddingLeft: 15,paddingRight: 15}} key={'answer_'+key}>
                            <TouchableOpacity style={[styles.btnQuestion]}>
                                <Text style={[styles.textQuestion]}>{item.title}</Text>
                            </TouchableOpacity>
                        </View> 
                    ))}
                    </View>
                    <View style={styles.boxBtn}>
                        <TouchableOpacity style={[styles.btnConfirm]}>
                            <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
