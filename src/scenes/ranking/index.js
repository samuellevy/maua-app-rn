import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './styles';

import Card from './components/card';
import BlankSpace from './components/blankspace';
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

    renderMe(){
        console.log(this.state.dataSource.my_store.ranking);
        if(this.state.dataSource.my_store.ranking > 0){
            <Card key={'card_me'} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status={'user'} title={this.state.dataSource.my_store.ranking + 'º Lugar'} image={this.state.dataSource.my_store.ranking+'-ranking'} store={this.state.dataSource.my_store.name} score={this.state.dataSource.my_store.total}/>
        }
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
                        <View style={styles.otherPlaces}>
                            {this.state.dataSource.stores.map((item, key) => (
                                key < 4 && <Card key={'card_'+key} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status={item.ranking==this.state.dataSource.my_store.ranking?'user':'non-user'} title={item.ranking + 'º Lugar'} image={item.ranking+'-ranking'} store={item.name} score={item.total}/>
                            ))}
                            {
                                this.state.dataSource.my_store.ranking > 4 &&
                                <Card key={'card_me'} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status={'user'} title={this.state.dataSource.my_store.ranking + 'º Lugar'} image={this.state.dataSource.my_store.ranking+'-ranking'} store={this.state.dataSource.my_store.name} score={this.state.dataSource.my_store.total}/>
                            }
                            <BlankSpace />
                            <BlankSpace />
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


