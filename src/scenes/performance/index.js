import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';
import NavIcon from '../../components/navigation/NavIcon';

import styles from './styles';

import General from './components/general';
import LastUpdate from './components/lastupdate';
import Sales from './components/sales';
import History from './components/history';
import api from '../../services/api';

export default class Performance extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Desempenho'} icon={'today'}/>;
        },
    };

    state={
        points:[],
        total:null,
        ranking:null,
        percent:null,
    }

    constructor (){
        super();
        this.getData();
    }
    

    getData = async () => {
        try{
            const response = await api.get('/points/get');
            this.setState({points: response.data.points,total: response.data.total,ranking: response.data.ranking});
            console.log(response.data.points);
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <Text style={styles.title}>
                        {'Desempenho'.toUpperCase()}
                    </Text>

                    <Text style={styles.subtitle}>Vendas Mensais</Text>
                    <Sales percent={this.state.percent}/>
                    <Text style={styles.subtitle}>Desempenho Geral</Text>
                    <General total={this.state.total} ranking={this.state.ranking}/>
                    <LastUpdate />
                    <Text style={styles.subtitle}>Histórico</Text>
                    <View style={styles.historyBox}>
                    {this.state.points.map((item,key) => (
                        <History key={'history_'+key} child={key<this.state.points.length?'not-last':'last'} date={item.date} description={item.title} score={item.point}/>
                    ))}
                        {/* <History child='not-last' date='07/18' description='Meta mensal atingida - 100%' score='50'/>
                        <History child='not-last' date='06/18' description='Módulo completado' score='100'/>
                        <History child='not-last' date='06/18' description='Cadastro de funcionários' score='25'/>
                        <History child='last' date='06/18' description='Módulo completado' score='20'/> */}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
