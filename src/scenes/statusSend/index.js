import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';

import styles from './styles';
import api from '../../services/api';

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
        console.log(this.state.statusOption)
    }
    
    render() {
        return (
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
 
                            <View style={styles.boxTitleStatu}>
                                <Text style={styles.titleStatu}>O que você achou do conteúdo desse módulo?</Text>
                            </View>

                            <View style={styles.contentAllStatus}>
                                <View style={styles.contentStatu}>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'greenStatus', statusClick: true, statusOption: 3})}}>
                                            <MaterialIcon name="sentiment-very-satisfied" size={65} style={[styles.greenStatus, (this.state.statusClick)?(this.state.statusSend == 'greenStatus')?styles.greenStatus:styles.greyStatus:'']}></MaterialIcon> 
                                            <Text style={[styles.textStatu, styles.greenStatus,  (this.state.statusClick)?(this.state.statusSend == 'greenStatus')?styles.greenStatus:styles.greyStatus:'']}>Ótimo</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'blueStatus', statusClick: true, statusOption: 2})}}>
                                            <MaterialIcon name="sentiment-satisfied" size={65} style={[styles.blueStatus, (this.state.statusClick)?(this.state.statusSend == 'blueStatus')?styles.blueStatus:styles.greyStatus:'']}></MaterialIcon>
                                            <Text style={[styles.textStatu, styles.blueStatus,  (this.state.statusClick)?(this.state.statusSend == 'blueStatus')?styles.blueStatus:styles.greyStatus:'']}>Bom</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.contentStatu}>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'yellowStatus', statusClick: true, statusOption: 1})}}>
                                            <MaterialIcon name="sentiment-dissatisfied" size={65} style={[styles.yellowStatus, (this.state.statusClick)?(this.state.statusSend == 'yellowStatus')?styles.yellowStatus:styles.greyStatus:'']}></MaterialIcon>
                                            <Text style={[styles.textStatu, styles.yellowStatus, (this.state.statusClick)?(this.state.statusSend == 'yellowStatus')?styles.yellowStatus:styles.greyStatus:'']}>Ruim</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'redStatus', statusClick: true, statusOption: 0})}}>
                                            <MaterialIcon name="sentiment-very-dissatisfied" size={65} style={[styles.redStatus, (this.state.statusClick)?(this.state.statusSend == 'redStatus')?styles.redStatus:styles.greyStatus:'']}></MaterialIcon>
                                            <Text style={[styles.textStatu, styles.redStatus, (this.state.statusClick)?(this.state.statusSend == 'redStatus')?styles.redStatus:styles.greyStatus:'']}>Muito ruim</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.boxBtnSend}>
                                <TouchableOpacity style={[styles.btnSend]} onPress={() => {this.sendStatus()}}>
                                    <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
