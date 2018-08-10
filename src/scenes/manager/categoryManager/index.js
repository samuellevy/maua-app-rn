import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Linking ,AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles';

import LastUpdate from './components/lastupdate';
import Loading from '../../../components/loading';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';

import { colors, metrics, fonts } from '../../../styles';

import api from '../../../services/api';
import rest from '../../../services/rest';

export default class categoryManager extends Component {
    static navigationOptions = {
        title: 'products',
        headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
    };
    pickerStyle = {
        inputIOS: {
            color: 'black',
            paddingTop: 13,
            paddingHorizontal: 10,
            paddingBottom: 12,
        },
        inputAndroid: {
            color: 'black',
        },
        placeholderColor: 'black',
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

    state = {
        selectNav: true,
        dataSource: null,
        typeUser: null,
        user:{
            name: null
        },
        category: 'Agosto',
        isLoading: true,
    };
    
    constructor (){ 
        super();
        this.componentDidMount();
    }
    
    componentDidMount(){
        this.getData();
    }

    getData(){
        rest.get('/public/infos').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                user: rest.user,
                typeUser: rest.user.role
            });
        })
    }

    componentWillReceiveProps(){
        this.getData();
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
                <ScrollView style={styles.scrollview}>
                    <View style={styles.allList}>
                        <View style={styles.contentTopList}>
                            <View style={styles.filter}>
                                {/* <Text style={styles.textSelect}>{this.state.category}</Text> */}

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

                            <LastUpdate/>
                        </View>

                        {/* {(this.state.selectNav == preto)} */}
                        <View style={styles.boxList}>
                            <View style={[styles.boxListTop, { backgroundColor: '#E6F2F0'}]}>
                                <MaterialIcon name="store" size={16} style={[styles.iconInfo, {color: '#14CC82'}]}></MaterialIcon>
                                <Text style={styles.textListTop}>10 LOJAS</Text>
                                <MaterialIcon name="event-available" size={16} style={[styles.iconInfo, styles.iconInfoRight, {color: '#14CC82'}]}></MaterialIcon>
                                <Text style={styles.textListTop}>6 CADASTRADAS</Text>
                            </View>

                            <View style={styles.viewBox}>
                                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home');}}>
                                    <View style={styles.items}>
                                        <View style={styles.position}>
                                            <Text style={styles.textPosition}>1º</Text>
                                        </View>
                                        <View style={styles.nameUser}>
                                            <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
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
                                        <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
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
                                        <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
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
                                        <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
                                    </View>
                                    <View style={styles.ponts}>
                                        <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                                        <MaterialIcon name="chevron-right" size={18} style={[styles.alertRed, styles.iconArrow]}></MaterialIcon>
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



const pickerStyle = {
	inputIOS: {
		color: 'black',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'black',
	},
	placeholderColor: 'black',
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