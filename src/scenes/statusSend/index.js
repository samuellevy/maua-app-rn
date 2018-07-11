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
                                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon> 
                                        <Text style={[styles.textStatu, styles.greenStatus]}>Ótimo</Text>
                                    </View>
                                    <View style={styles.itemStatu}>
                                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                                        <Text style={[styles.textStatu, styles.blueStatus]}>Bom</Text>
                                    </View>
                                </View>
                                <View style={styles.contentStatu}>
                                    <View style={styles.itemStatu}>
                                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                                        <Text style={[styles.textStatu, styles.yellowStatus]}>Ruim</Text>
                                    </View>
                                    <View style={styles.itemStatu}>
                                        <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                                        <Text style={[styles.textStatu, styles.redStatus]}>Muito ruim</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.boxBtn}>
                                <TouchableOpacity style={[styles.btnConfirm]} >
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
