import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './styles';

import WinnerCard from './components/winnercard';
import Card from './components/card';
import { metrics, colors } from '../../styles';
import rest from '../../services/rest';
import Loading from '../../components/loading';

export default class Ranking extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            return <NavIcon title={'Ranking'} icon={'star'} />;
        },
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
        rest.get('/public/ranking').then((rest)=>{
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
                <ScrollView style={styles.scrollview}>
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            {'Ranking das lojas'.toUpperCase()}
                        </Text>
                        <WinnerCard store={this.state.dataSource.stores[0].name} score={this.state.dataSource.stores[0].total}/>
                        <View style={styles.otherPlaces}>
                        {this.state.dataSource.stores.map((item, key) => (
                            key > 0 && <Card key={'card_'+key} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status={item.ranking==this.state.dataSource.my_store.ranking?'user':'non-user'} title={item.ranking + 'º Lugar'} image={item.ranking+'-ranking'} store={item.name} score={item.total}/>
                        ))}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


