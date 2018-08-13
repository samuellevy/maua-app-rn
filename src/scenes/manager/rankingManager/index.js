import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Linking ,AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import RNPickerSelect from 'react-native-picker-select';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import api from '../../../services/api';
import rest from '../../../services/rest';

import styles from './styles';
import LastUpdate from './components/lastupdate';

export default class HomeManage extends Component {
    static navigationOptions = {
        title: '',
    };

    pickerStyle = {
        inputIOS: {
            color: '#00985B',
            paddingTop: 13,
            paddingHorizontal: 10,
            paddingBottom: 12,
        },
        inputAndroid: {
            color: '#00985B',
        },
        placeholderColor: '#00985B',
        underline: { borderTopWidth: 0 },
        icon: {
            position: 'absolute',
            backgroundColor: 'transparent',
            borderTopWidth: 5,
            borderTopColor: '#00000099',
            borderRightWidth: 5,
            borderRightColor: 'transparent',
            borderLeftWidth: 5,
            borderLeftColor: 'transparent',
            width: 0,
            height: 0,
            top: 20,
            right: 15,
        },
    };
    
    constructor (){ 
        super();
        this.componentDidMount();
    }

    state = {
        stateStore: null,
        selectNav: 'verde',
        ranking: null
    };

    componentDidMount(){
        this.teste();
    }

    teste() {
        rest.get('/manager/infos').then((rest)=>{
            this.setState({ranking: rest.rankingYellow})
        });
    }

    trunc(text) {
        return text.length > 20 ? `${text.substr(0, 27)}...` : text;
    }

    openArray() {
        return(
            <View>
                {this.state.ranking.map((item, key) => (
                    <View key={key}>
                        {console.log(item)}
                        <Text>teste</Text>
                    </View> 
                ))}
            </View>
        )
    }

    render() {
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
       
        console.log(this.state.ranking)

        return (
            <View style={styles.container}>
                {/* {this.openArray()} */}
                <View style={styles.navTop}>
                    <TouchableOpacity style={[styles.itemTxt, (this.state.selectNav == 'verde')?styles.itemTxtActive:'']} onPress={() => {this.setState({selectNav: 'verde'})}}>
                        <Text style={styles.colorTxt}>VERDE</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.itemTxt, (this.state.selectNav == 'amarelo')?styles.itemTxtActive:'']} onPress={() => {this.setState({selectNav: 'amarelo'})}}>
                        <Text style={styles.colorTxt}>AMARELO</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.itemTxt, (this.state.selectNav == 'preto')?styles.itemTxtActive:'']} onPress={() => {this.setState({selectNav: 'preto'})}}>
                        <Text style={styles.colorTxt}>PRETO</Text>
                    </TouchableOpacity> 
                </View>
                <ScrollView style={[styles.scrollview, {marginBottom: 110}]}>
                    <View style={styles.allList}>
                        <View style={styles.contentTopList}>
                            <View style={styles.filter}>
                                <RNPickerSelect
                                    selectedValue={this.state.category}
                                    placeholder={{}}
                                    onValueChange={itemValue => this.setState({ category: itemValue })}
                                    style={this.pickerStyle}
                                    items={[
                                        { label: 'Novembro', value: 'Novembro' },
                                        { label: 'Dezembro', value: 'Dezembro' },
                                    ]}
                                />
                            </View>

                            <View style={styles.boxFilter}>
                                <LastUpdate/>
                            </View>
                        </View>

                        <View style={styles.boxList}>
                            <View style={styles.viewBox}>
                                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');}}>
                                    <View style={styles.items}>
                                        <View style={styles.position}>
                                            <Text style={styles.textPosition}>1º</Text>
                                        </View>
                                        <View style={styles.nameUser}>
                                            <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                        </View>
                                        <View style={styles.ponts}>
                                            <Text style={styles.textItem}>100 pt</Text>
                                            <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <Text style={styles.textPosition}>2º</Text>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem]}>100 pt</Text>
                                        <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <Text style={styles.textPosition}>2º</Text>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem]}>100 pt</Text>
                                        <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                                <View style={styles.items}>
                                    <View style={styles.position}>
                                        <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                                    </View>
                                    <View style={styles.nameUser}>
                                        <Text style={styles.textItem}>{this.trunc('Rede MJ Oliveira Mundo dos Sonhos')}</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}