import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import ModalBox from '../../components/modal/modalStyle'

export default class ModalExample extends Component {
    static navigationOptions = {
        header: null 
    };

    state = {
        modal: [
            {
                titleModal: 'FALTA POUCO!',
                icon: 'school',
                iconColor: '#fff',
                colorTop: '#00985B',
                video: null,
                textBtn: 'ACESSAR CURSO',
                titleDescription: 'Módulo 3: Cimento texturizado',
                description: 'Você tem módulos a fazer no curso de capacitação. Complete-os agora e acumule pontos para sua loja.',
            }
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <Header />

                <ScrollView contentContainerStyle={styles.cursoInfo}>
                    {
                        this.state.modal.map(modal => <ModalBox data={modal} /> )
                    }
                </ScrollView>
                <Nav />
            </View>
        );
    }
}