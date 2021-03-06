import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';

import styles from './styles';
import api from '../../services/api';

import FormLojista from '../../scenes/formLojista';

export default class statusSend extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        statusSend: '',
        statusOption: '',
        statusClick: false,
    }

    sendStatus() {
        
    }
    
    render() {
        return (
            <View style={styles.contentQuiz}>
                <View style={styles.content}> 

                    <View style={styles.contentTop}>
                        <MaterialIcon name="check-circle" size={65} style={[styles.iconGreat]}></MaterialIcon> 
                        <Text style={styles.titleStatuFinish}>Avaliação enviada!</Text>
                    </View>

                    <View style={styles.contentFinish}>
                        <Text style={styles.textTopFinish}>A sua opinião vale muito para nós criarmos um conteúdo melhor pra você!</Text>
                    </View>

                    <View style={styles.boxBtnSend}>
                        <TouchableOpacity style={[styles.btnResposta]} onPress={() => {this.sendStatus()}}>
                            <Text style={styles.textBtn}>QUIZ COM RESPOSTAS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.btnSair]}>
                            <Text style={[styles.btnColotGreen]}>SAIR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
