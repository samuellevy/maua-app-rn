import React, { Component } from 'react';

import { View, Text, TouchableOpacity, WebView, Modal } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default class modalStyle extends Component {

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
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() { 
        return(
            <Modal animationType="fade"    
                transparent={true}
                visible={this.state.visibleModal}
                onRequestClose={() => { this.visibleModal(false); } }>
                
                <View style={styles.contentModal}>
                    <View style={styles.modalTop} style={{backgroundColor: this.props.data.colorTop}}>
                        <View style={styles.boxTitleTop}>
                            <Text style={styles.titleTop}>{this.props.data.titleModal}</Text>

                            <TouchableOpacity style={styles.clearBtn} onPress={() => {this.setState({visibleModal: false})} }>
                                <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                            </TouchableOpacity>
                        </View>
                        
                        <View style={styles.icon}>
                            <MaterialIcon name={this.props.data.icon} size={25} style={styles.icon} color={this.props.data.iconColor}>
                            </MaterialIcon>
                        </View>
                        {
                            this.contentTop(this.props.data.video)
                        } 
                    </View>
 
                    <View style={styles.modalBottom}>
                        <Text style={styles.titleDescription}>{this.props.data.titleDescription}</Text>
                        <Text style={styles.description}>{this.props.data.description}</Text>

                        <View style={styles.contentBtn}>
                            <TouchableOpacity style={styles.acessMod}>
                                <Text style={styles.textBtn}>{this.props.data.textBtn}</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}