import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../../../components/navigation/NavIcon';
import styles from './styles';  
import Pie from '../../../../components/pie'

import { colors, metrics, fonts } from '../../../../styles';

var arrayQuest = new Array(); 

export default class Finish extends Component {
    contentTop = (video) => {
        if(video == null) {
            return 
            <View style={styles.icon}><MaterialIcon name={this.props.data.icon} size={25} style={styles.icon} color={this.props.data.iconColor}></MaterialIcon></View>
        } else {
            return <View style={styles.viewVideo}><WebView source={{ uri: video }} /></View>
        }
    }

    state = {
        modalVisible: false
    }

    setModalVisible(visible) { 
        this.setState({modalVisible: visible});
    }

    render() {  

        let navigator = this.props.navigator;

        return (
            <Modal animationType="fade"    
            transparent={true}
            visible={this.state.visibleModal}
            onRequestClose={() => { this.visibleModal(false); } }> 
               <View style={styles.contentModal}>
                    <View style={styles.modalTop} style={{backgroundColor: "#E6F2F0"}}>
                        <View style={styles.boxTitleTop}>
                            <Text style={styles.titleTop}>Resultado</Text>

                            <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                                <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon> 
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.contentPie}>                            
                            <View style={styles.boxPie}>
                                <Pie percent={"80"} />
                            </View>
                            
                            <Text style={styles.textBottomPie}>Parabéns!</Text>
                            <Text style={styles.textNote}>Você acertou {"80"}% do teste!</Text> 
                        </View>
                    </View>
 
                    <View style={styles.modalBottom}>
                        <Text style={styles.titleDescription}>Chame todo mundo!</Text>
                        <Text style={styles.description}>Uma maneira de acumular pontos é com todos os funcionários completando o módulo do mês. Não dê bobeira ou incentive seus colegas!</Text>

                        <View style={styles.contentBtn}>
                            <TouchableOpacity style={styles.acessMod} onPress={navigator}>
                                <Text style={styles.textBtn}>CONTINUAR</Text> 
                            </TouchableOpacity> 
                        </View>
                    </View> 
                </View>
            </Modal>
        );
    }
}