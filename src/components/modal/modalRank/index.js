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

    imageRank(number) {
        if(number == "1") {
            return(
                <Image
                    style={styles.imageBg}
                    source={require('../../../../assets/img/push-1l.png')}
                />
            );
        }
        if(number == "2") {
            return(
                <Image
                    style={styles.imageBg}
                    source={require('../../../../assets/img/push-2l.png')}
                />
            );
        }
        if(number == "3") {
            return(
                <Image
                    style={styles.imageBg}
                    source={require('../../../../assets/img/push-3l.png')}
                />
            );
        }
        if(number == "4") {
            return(
                <Image
                    style={styles.imageBg}
                    source={require('../../../../assets/img/push-4l.png')}
                />
            );
        }
    }

    render() {
        let title = this.props.title;
        let description = this.props.description;
        let numberRank = this.props.numberRank;

        let data = this.props.data;

        return(
            <View>
                <Modal animationType="fade"      
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => { this.visibleModal(false); } }> 
                    <View style={styles.contentModal}>
                        <View style={[styles.modalTop, {backgroundColor: data.color}]}>
                            <View style={styles.boxTitleTop}>
                                {/* <Text style={styles.titleTop}>QUASE LÁ!</Text> */}
                                <Text style={styles.titleTop}>{data.title}</Text>

                                <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false});}}>
                                    <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon> 
                                </TouchableOpacity>
                            </View>

                            <View style={styles.contentIcon}>
                                <View style={styles.iconBox}>
                                    {this.imageRank(data.number_ranking)}
                                    {/* <Image
                                        style={styles.imageBg}
                                        source={require('../../../../assets/img/push-'+numberRank+'l.png')}
                                        /> */}
                                </View>
                            </View>
                        </View>

                        <View style={styles.modalBottom}>
                            <Text style={styles.titleDescription}>{data.subtitle}</Text>
                            <Text style={styles.textReg}>{data.description}</Text>
                            {/* <Text style={styles.textReg}>Sua loja está perto de atingir a meta! Falta apenas 10% para sua loja completar a meta do mês.</Text> */}

                            {/* <View style={styles.contentBtn}>
                                <TouchableOpacity style={styles.acessMod} onPress={() => {this.setState({visibleModal: false});}}>
                                    <Text style={styles.textBtn}>ACOMPANHAR RANKING</Text> 
                                </TouchableOpacity> 
                            </View> */}
                        </View> 
                    </View>
                </Modal>
            </View>
        );
    }
}


