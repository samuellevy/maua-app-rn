import React, { Component } from 'react';

import { View, Text, Image, TextInput, ScrollView, ScrollSheet, WebView, TouchableOpacity, TouchableHighlight, Alert } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import { colors } from '../../../styles';

import Header from '../../../components/header';
import Title from '../../../components/title/primary'; 
import TitleSec from '../../../components/title/secondaryTitle';
import Nav from '../../../components/navigation';
import ModalBox from '../../../components/modal/alert';

import NavIcon from '../../../components/navigation/NavIcon';

import api from '../../../services/api';

export default class Curso extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Curso'} icon={'school'}/>;
        },
    };
    state={

    }

    clickCurse() {
        Alert.alert(
            'Opss..',
            'Este curso ainda não esta liberado',
                [
                    // {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                    // {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        const testStart = null;

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.cursoInfo}>
                    <View style={styles.containerCurso}>
                        <View style={styles.boxTitle}>
                            <Title textContent={'CURSO DE CAPACITAÇÃO'} />
                        </View>
                        <TitleSec textContent={item.title} />

                        <Text style={styles.infoCurse}>
                            {item.subtitle}                   
                        </Text>

                        <Text style={styles.description}>
                            {item.description}
                        </Text>

                        <View style = {styles.viewVideo}>
                            <WebView style={styles.boxVideo} scrollEnabled={false} source = {{ uri: 'https://www.youtube.com/embed/'+item.video_url+'?controls=0&fs=0&rel=0&showinfo=0' }} />
                        </View>

                        <View style={styles.boxTest}>
                            <TouchableOpacity style={styles.startTest} onPress={() => { navigation.navigate('Question');}}>
                                <Text style={styles.textBtn}>FAZER O TESTE</Text> 
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <Nav />
            </View>
        );
    }
}