import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';  

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
        return (
            <Modal animationType="fade"      
            transparent={true}
            visible={this.state.visibleModal}
            onRequestClose={() => { this.visibleModal(false); } }> 
               <View style={styles.contentModal}>
                    <View style={styles.modalTop}>
                        <View style={styles.boxTitleTop}>
                            <Text style={styles.titleTop}>REGULAMENTO</Text>

                            <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false});}}>
                                <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon> 
                            </TouchableOpacity>
                        </View>
                    </View>
 
                    <View style={styles.modalBottom}>
                        <ScrollView style={styles.scrollview}>
                            <Text style={styles.textReg}>Curabitur eleifend, turpis sit amet dignissim aliquet, nisl arcu interdum nibh, vitae vestibulum nisl lacus varius quam. Phasellus lobortis iaculis sem non faucibus. In pharetra pellentesque scelerisque. Aliquam et mi imperdiet, accumsan dui nec, scelerisque mauris. Etiam gravida egestas dolor, at semper nulla euismod sit amet. Quisque sit amet nulla varius, sagittis mi at, aliquam lacus. Praesent at urna orci. Nam pretium dapibus purus, sit amet aliquam arcu sagittis id. Quisque vel tempus orci. Cras quis dolor sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse ac neque id tortor ornare finibus sit amet quis mauris. In in ligula ac ipsum convallis finibus vitae quis nibh. Vivamus varius, enim vel efficitur tempus, ex sem aliquet odio, non gravida leo quam non quam. </Text>
                        </ScrollView>

                        <View style={styles.contentBtn}>
                            <TouchableOpacity style={styles.acessMod} onPress={() => {this.setState({visibleModal: false});}}>
                                <Text style={styles.textBtn}>ESTOU DE ACORDO</Text> 
                            </TouchableOpacity> 
                        </View>
                    </View> 
                </View>
            </Modal>
        );
    }
}