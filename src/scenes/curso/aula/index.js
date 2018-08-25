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
import Player from '../../player';
import NavIcon from '../../../components/navigation/NavIcon';
import Loading from '../../../components/loading';

import rest from '../../../services/rest';

export default class Curso extends Component {
    static navigationOptions = {
        header: ({ navigation }) => (<Header navigation={navigation} backTo={'Curso'}/>),
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Curso'} icon={'school'}/>;
        },
    };
    
    state={
        isLoading: true,
    }

    constructor(props) {
        super(props); 
        this.getData();
    }

    getData(){
        if(this.state.reloading){
            this.setState({isLoading: true});
        }
        rest.get('/users/me').then((rest)=>{
            this.setState({dataSource: rest, isLoading: false, role_id: rest.user.role_id});
        });
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

    btnCurso(item, navigation) {
        if(this.state.role_id == 6){
            if(item.progress != "Completo") {
                return(
                    <View style={styles.boxTest}>
                        <TouchableOpacity style={styles.startTest} onPress={() => { navigation.navigate('Question', {item: item.id});}}>
                            <Text style={styles.textBtn}>RESPONDER QUIZ</Text> 
                        </TouchableOpacity>
                    </View>
                );
            }
        }
    }

    render() {
        const { navigation } = this.props;
        const item = navigation.getParam('item', 'NO-ID');
        const testStart = null;

        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={[styles.cursoInfo]}>
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
                            <WebView style={styles.boxVideo} scrollEnabled={false} source = {{ uri: 'https://www.youtube.com/embed/'+item.video_url+'?controls=1&fs=1&rel=0&showinfo=0' }} />
                            {/* <Player style={styles.boxVideo} item={item}/> */}
                        </View>

                        {this.btnCurso(item, navigation)}
                    </View>
                </ScrollView>
                <Nav />
            </View>
        );
    }
}