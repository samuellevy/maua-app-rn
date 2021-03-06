import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './styles';

import NavIcon from '../../components/navigation/NavIcon';
import ModalBox from '../../components/modal/modalStyle'
import rest from '../../services/rest';
import Loading from '../../components/loading';

export default class Rule extends Component {
    static navigationOptions = {
		title: '',
		headerTintColor: 'white',
		headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
		headerTitleStyle: { color: 'white' },
    };

    state = {
        typeUser: null,
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
     
    
    constructor(props){
        super(props);
        this.componentDidMount();
        this.state = {
            isLoading: true,
            points:[],
            total:null,
            ranking:null,
            percent:null,
            dataSource:[]
        }
    }
    
    componentDidMount(){
        rest.get('/public/infos').then((rest)=>{
            this.setState({
                typeUser: rest.user.role
            });
        })
    }

    componentWillMount(){
        rest.get('/pages/get/rules').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
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
            <View style={styles.container}>
                {/* {
                    this.state.modal.map(modal => <ModalBox data={modal} /> )
                } */}
                <ScrollView>
                    <View style={styles.ruleContent}>
                        <Text style={styles.ruleTitle}>
                            {'Regulamento'.toUpperCase()}
                        </Text>
                        <Text style={styles.ruleParagraph}>
                            {this.state.dataSource.page.content}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


