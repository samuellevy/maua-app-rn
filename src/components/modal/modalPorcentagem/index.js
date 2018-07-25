import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../../components/navigation/NavIcon';
import styles from './styles';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/rest';

export default class ModalTeste extends Component {
    state = {
        visibleModal: true,
    }

    render() {
        let title = this.props.title;
        let description = this.props.description;
        let porcentagem = this.props.porcentagem;

        return(
            <View>
                <Modal animationType="fade"      
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => { this.visibleModal(false); } }> 
                    <View style={styles.contentModal}>
                        <View style={styles.modalTop}>
                            <View style={styles.boxTitleTop}>
                                {/* <Text style={styles.titleTop}>QUASE LÁ!</Text> */}
                                <Text style={styles.titleTop}>{title}</Text>

                                <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false});}}>
                                    <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon> 
                                </TouchableOpacity>
                            </View>

                            <View style={styles.contentIcon}>
                                <View style={styles.iconBox}>
                                    <Text style={styles.textParc}>{porcentagem}%</Text>
                                    {/* <Text style={styles.textParc}>90%</Text> */}
                                    {/* <MaterialIcon name="leaf" size={25} style={styles.iconClear}></MaterialIcon>  */}
                                    <Image
                                        style={styles.imageBg}
                                        source={require('../../../../assets/img/iconCalendar.png')}
                                        />
                                </View>
                            </View>
                        </View>

                        <View style={styles.modalBottom}>
                            <Text style={styles.textReg}>{description}</Text>
                            {/* <Text style={styles.textReg}>Sua loja está perto de atingir a meta! Falta apenas 10% para sua loja completar a meta do mês.</Text> */}

                            <View style={styles.contentBtn}>
                                <TouchableOpacity style={styles.acessMod} onPress={() => {this.setState({visibleModal: false});}}>
                                    <Text style={styles.textBtn}>CONFERIR DESEMPENHO</Text> 
                                </TouchableOpacity> 
                            </View>
                        </View> 
                    </View>
                </Modal>
            </View>
        );
    }
}


