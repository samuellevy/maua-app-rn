import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import { colors } from '../../styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';  

export default class FormLojista extends Component {
    contentTop = (video) => {
        if(video == null) {
            return 
            <View style={styles.icon}><MaterialIcon name={this.props.data.icon} size={25} style={styles.icon} color={this.props.data.iconColor}></MaterialIcon></View>
        } else {
            return <View style={styles.viewVideo}><WebView source={{ uri: video }} /></View>
        }
    }

    state = {
        modalVisible: false,
        nome:null,
        email:null,
        celular:null
    }

    setModalVisible(visible) { 
        this.setState({modalVisible: visible});
    }
 
    render() {   
        return (
            <Modal animationType="fade"      
            transparent={true}
            visible={this.state.visibleModal}
            onRequestClose={() => { this.visibleModal(false); } }> 
               <View style={styles.contentModal}>
                    <View style={styles.modalTop}>
                        <View style={styles.boxTitleTop}>
                            <Text style={styles.titleTop}>ATUALIZE SEUS DADOS</Text>
                        </View>
                    </View>
 
                    <View style={styles.modalBottom}>
                        <ScrollView style={styles.scrollview}>
                            <View style={styles.contentForm}>
                                <View style={styles.boxInput}> 
                                    <Text style={styles.inputText}>Nome</Text>
                                    <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder={"Digite seu nome"} onChangeText={(Nome) => this.setState({Nome})} value={this.state.Nome} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                                </View>
                                <View style={styles.boxInput}> 
                                    <Text style={styles.inputText}>E-mail</Text>
                                    <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder={"Digite seu email"} onChangeText={(email) => this.setState({email})} value={this.state.email} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                                </View>
                                <View style={styles.boxInput}> 
                                    <Text style={styles.inputText}>Celular</Text>
                                    <TextInput style={styles.input} underlineColorAndroid='transparent' placeholder={"Digite seu celular"} onChangeText={(celular) => this.setState({celular})} value={this.state.celular} placeholderTextColor={colors.textColor} returnKeyType='done'/>
                                </View>
                            </View>
                        </ScrollView>

                        <View style={styles.contentBtn}>
                            <TouchableOpacity style={styles.acessMod} onPress={() => {this.setState({visibleModal: false});}}>
                                <Text style={styles.textBtn}>ATUALIZAR</Text> 
                            </TouchableOpacity> 
                        </View>
                    </View> 
                </View>
            </Modal>
        );
    }
}