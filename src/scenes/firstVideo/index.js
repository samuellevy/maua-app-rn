import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, WebView, Image, TouchableOpacity, Modal, ListView, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import rest from '../../services/rest';
import Loading from '../../components/loading';

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
        modalVisible: false,
    }

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            dataSource:[]
        }
    }

    setModalVisible(visible) { 
        this.setState({modalVisible: visible});
    }

    componentDidMount(){
        rest.get('/pages/get/about').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                typeUser: rest.user.role
            });
        })
    }
 
    render() {
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        return (
            <Modal animationType="fade"      
            transparent={true}
            visible={this.state.visibleModal}
            onRequestClose={() => { this.visibleModal(false); } }> 
               <View style={styles.contentModal}>
                    <View style={styles.modalTop}>
                        <View style={styles.boxTitleTop}>
                            <Text style={styles.titleTop}>SOBRE O PROGRAMA</Text>

                            <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false});}}>
                                <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon> 
                            </TouchableOpacity>
                        </View>
                    </View>
 
                    <View style={styles.modalBottom}>
                        <Text style={styles.textReg}>Assista o vídeo para entender como funciona o nosso programa.</Text>
                        
                        <View style={styles.viewVideo}>
                            <WebView style={styles.boxVideo} scrollEnabled={false} source = {{ uri: 'https://www.youtube-nocookie.com/embed/'+this.state.dataSource.page.url+'/?rel=0&amp;showinfo=0' }} />
                        </View>

                        <View style={styles.contentBtn}>
                            <TouchableOpacity style={styles.acessMod} onPress={() => {this.setState({visibleModal: false});}}>
                                <Text style={styles.textBtn}>CONTINUAR</Text> 
                            </TouchableOpacity> 
                        </View>
                    </View> 
                </View>
            </Modal>
        );
    }
}