import React, { Component } from 'react';

import { View, Text, TouchableOpacity, WebView, Modal } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import rest from '../../../../services/rest';

import styles from './styles';

export default class modal extends Component {
    state = { 
        modalVisible: false,
        idUser: 0,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    deleteUser (idUser, navigation) {
        let data = JSON.stringify({
            id: idUser,
        });
        
        rest.post('/users/remove', data).then((rest)=>{
            this.setState({visibleModal: false});
            navigation.navigate('Employe', {reloading: true});
        });
    }

    render() { 
        let idUser = this.props.id;
        let navigation = this.props.navigation;

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

                            <TouchableOpacity style={styles.btnConfirm}  onPress={() => this.deleteUser(idUser, navigation)}>
                                <Text style={styles.textBtnConfirm}>CONFIRMAR</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}