import React, { Component } from 'react';

import { View, Text, TouchableOpacity, WebView, Modal } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../../services/api';

import styles from './styles';

export default class modal extends Component {
    state = { 
        modalVisible: false,
        idUser: 0,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    // delete(idUser) {
    //     console.log("dasdadsadasd")
    //     console.log(idUser)
    //     try{
    //         const response = await api.post('/users/remove',{
    //             id: idUser
    //         });
    //         console.log('try')
    //         console.log(response.data);
    //     } catch (response){
    //         console.log('catch')
    //         this.setState({ errorMessage: response.data.message });
    //     }
    // }

    postData = async (idUser) => {
        try{
            const response = await api.post('/users/remove',{
                id: idUser
            });
            this.setState({visibleModal: false})
            console.log(response.data);
        } catch (response){
            console.log(response)
            this.setState({ errorMessage: response.data.message });
            this.setState({visibleModal: false})
        }
    }

    render() { 
        let idUser = this.props.id;

        return(
            <Modal animationType="fade"    
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => { this.visibleModal(false); } }>
                
                <View style={styles.contentModal}>
                    <View style={styles.wrapper}>
                        <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                            <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                        </TouchableOpacity>

                        <Text style={styles.titleModal}>Tem certeza que quer excluir este funcionario da equipe?</Text>
                        <Text style={styles.textModal}>Essa ação não pode ser desfeita.</Text>

                        <View style={styles.boxBtn}>
                            <TouchableOpacity style={styles.btnExit} onPress={() => {this.setState({visibleModal: false})} }>
                                <Text style={styles.textBtnExit}>SAIR</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnConfirm}  onPress={() => this.postData(idUser)}>
                                <Text style={styles.textBtnConfirm}>CONFIRMAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}