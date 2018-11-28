import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

import Card from './components/card';
import BlankSpace from './components/blankspace';
import { metrics, colors } from '../../styles';
import rest from '../../services/rest';
import Loading from '../../components/loading';
import Header from '../../components/header';

export default class Ranking extends Component {
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
            dataSource:[],
            scene: 'month'
        }
    }

    componentWillMount(){
        this.getData('month');
    }
    
    getData(ranking_mode){
        console.log(ranking_mode);
        if(ranking_mode=='month'){
            rest.get('/public/ranking').then((rest)=>{
                this.setState({
                    isLoading: false,
                    dataSource: rest,
                });
            })
        }else{
            rest.get('/public/general_ranking').then((rest)=>{
                this.setState({
                    isLoading: false,
                    dataSource: rest,
                });
            })
        }
    }

    changeRankingMode(ranking_mode){
        this.setState({scene: ranking_mode, isLoading: true});
        this.getData(ranking_mode);
    }

    renderMe(){
        console.log(this.state.dataSource.my_store.ranking);
        if(this.state.dataSource.my_store.ranking > 0){
            <Card key={'card_me'} url={() => { this.props.navigation.navigate('Performance'); this.setState({ screen: 'Performance' }) }} status={'user'} title={this.state.dataSource.my_store.ranking + 'º Lugar'} image={this.state.dataSource.my_store.ranking+'-ranking'} store={this.state.dataSource.my_store.name} score={this.state.dataSource.my_store.total}/>
        }
    }

    renderContent(){
        return(
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
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                <View style={styles.tabs}>
                    <TouchableOpacity activeOpacity={1} style={[styles.tab, {borderBottomColor: this.state.scene=='month'?colors.light:colors.primary}]} onPress={()=>this.changeRankingMode('month')}>
                        <Text style={[styles.txtTab, {color: this.state.scene=='month'?colors.light:colors.white}]}>{'Ranking Mensal'.toUpperCase()}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} style={[styles.tab, {borderBottomColor: this.state.scene=='general'?colors.light:colors.primary}]} onPress={()=>this.changeRankingMode('general')}>
                        <Text style={[styles.txtTab, {color: this.state.scene=='general'?colors.light:colors.white}]}>{'Ranking GEral'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
                    <View style={styles.content}>
                        <Text style={styles.title}>
                            {'Ranking das lojas'.toUpperCase()}
                        </Text>
                        {this.state.isLoading?<Loading/>:this.renderContent()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}


