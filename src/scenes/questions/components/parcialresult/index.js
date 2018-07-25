import React, { Component } from 'react';

import { View, Modal, Text, TouchableOpacity, ScrollView, Button } from 'react-native';

import styles from './styles';

export default class ParcialResult extends Component {
    state = {
        visibleModal: true
    }

    //nao sendo usado

    render() {
        return (
            <View>
                <Modal animationType="fade"      
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => { this.visibleModal(false); } }> 
                <View style={styles_modal.contentModal}>
                    <View style={styles_modal.modalTop}>
                        <View style={styles_modal.boxTitleTop}>
                            <Text style={styles_modal.titleTop}>REGULAMENTO</Text>
                        </View>
                    </View>
                    
                    <View style={styles_modal.modalBottom}>
                        <ScrollView style={styles_modal.scrollview}>
                            <Text style={styles_modal.textReg}>aa</Text>
                        </ScrollView>
                        
                        <View style={styles_modal.contentBtn}>
                            <TouchableOpacity style={styles_modal.acessMod} onPress={()=>{this.props.action}}>
                                <Text style={styles_modal.textBtn}>ESTOU DE ACORDO</Text> 
                            </TouchableOpacity> 
                        </View>
                    </View> 
                </View>
                </Modal>
            </View>
        );
    }
}
