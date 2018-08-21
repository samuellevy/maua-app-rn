import React, { Component } from 'react';

import { View, ScrollView, Text } from 'react-native';
import NavIcon from '../../components/navigation/NavIcon';

import styles from './styles';

import General from './components/general';
import LastUpdate from './components/lastupdate';
import Sales from './components/sales';
import History from './components/history';
import rest from '../../services/rest';
import Loading from '../../components/loading';
import Header from '../../components/header';

export default class Performance extends Component {
    static navigationOptions = {
        // header: null,
        title: 'Home',
        header: (<Header/>)
    };

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            points:[],
            total:null,
            ranking:null,
            percent:null,
            dataSource:[]
        }
    }

    componentWillMount(){
        rest.get('/public/infos').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
            });
        })
        this.forceUpdate();
    }

    render() {
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <Text style={styles.title}>
                        {'Desempenho'.toUpperCase()}
                    </Text>

                    <Text style={styles.subtitle}>Vendas Mensais</Text>
                    <Sales item={this.state.dataSource.sales}/>
                    <Text style={styles.subtitle}>Desempenho Geral</Text>
                    <General ranking={this.state.dataSource.store.ranking} total={this.state.dataSource.store.points}/>
                    {/* <LastUpdate /> */}
                    <Text style={styles.subtitle}>Histórico</Text>
                    <View style={styles.historyBox}>
                        {this.state.dataSource.points.map((item,key) => (
                            <History key={'history_'+key} child={key<this.state.points.length?'not-last':'last'} date={item.created} description={item.title} score={item.point}/>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
