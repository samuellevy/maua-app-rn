import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Linking ,AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles';

import LastUpdate from './components/lastupdate';
import Loading from '../../../components/loading';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RNPickerSelect from 'react-native-picker-select';

import { colors, metrics, fonts } from '../../../styles';

import Header from '../../../components/header';

import api from '../../../services/api';
import rest from '../../../services/rest';

export default class categoryManager extends Component {
       static navigationOptions = {
        header: ({ navigation }) => (<Header navigation={navigation}/>),
        title: 'Lojas',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' },
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

    state = {
        selectNav: true,
        dataSource: null,
        typeUser: null,
        selectNav: 'amarelo',
        user:{
            name: null
        },
        category: 'Agosto',
        isLoading: true,
    };
    
    constructor(props){ 
        super(props);
        this.getData(props.navigation.state.params.category);
        switch(props.navigation.state.params.category){
            case 'p':
                this.state.selectNav = 'amarelo';
            break;
            case 'm':
                this.state.selectNav = 'verde';
            break;
            case 'g':
                this.state.selectNav = 'preto';
            break;
        }
    }

    getData(category){
        this.setState({
            isLoading: true,
        });
        rest.get('/manager/all_ranking/'+category).then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                user: rest.user,
                typeUser: rest.user.role,
                dataRanking: rest.ranking
            });
        })
        this.forceUpdate();
    }

    trunc(text) {
        return text.length > 20 ? `${text.substr(0, 20)}...` : text;
    }

    renderItem(key, item, owner, navigation){
        owner = true;
        if(owner){
            if(item.user_id == this.state.user.id){
                return (
                    <TouchableOpacity key={key} onPress={() => {navigation.navigate('StoreManager', {item: item})}}>
                        <View key={key} style={styles.items}>
                            <View style={styles.position}>
                            {item.total==0?
                                <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>:
                                <Text style={styles.textPosition}>{item.position}º</Text>
                            }
                            </View>
                            <View style={styles.nameUser}>
                                <Text style={styles.textItem}>{this.trunc(item.name)}</Text>
                            </View>
                            <View style={styles.ponts}>
                            {item.total==0?
                                <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>:
                                <View>
                                    <Text style={[styles.textItem]}>{item.total} pt</Text>
                                    <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                                </View>
                            }
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            } 
        }else{
            return (
                <TouchableOpacity onPress={() => {navigation.navigate('StoreManager')}}>
                    <View key={key} style={[styles.items, item.user_id==this.state.user.id && styles.myItems]}>
                        <View style={styles.position}>
                        {item.total==0?
                            <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>:
                            <Text style={styles.textPosition}>{item.position}º</Text>
                        }
                        </View>
                        <View style={styles.nameUser}>
                            <Text style={styles.textItem}>{this.trunc(item.name)}</Text>
                        </View>
                        <View style={styles.ponts}>
                        {item.total==0?
                            <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>:
                            <View style={styles.boxIcon}>
                                <Text style={[styles.textItem]}>{item.total} pt</Text>
                                <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                            </View>
                        }
                        </View>
                    </View>
                </TouchableOpacity>
            )
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
                <View style={styles.navTop}>
                    <TouchableOpacity style={[styles.itemTxt, (this.state.selectNav == 'amarelo')?styles.itemTxtActive:'']} onPress={() => {this.setState({selectNav: 'amarelo'});this.getData('p', true);}}>
                        <Text style={styles.colorTxt}>AMARELO</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.itemTxt, (this.state.selectNav == 'verde')?styles.itemTxtActive:'']} onPress={() => {this.setState({selectNav: 'verde'});this.getData('m', true);}}>
                        <Text style={styles.colorTxt}>VERDE</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={[styles.itemTxt, (this.state.selectNav == 'preto')?styles.itemTxtActive:'']} onPress={() => {this.setState({selectNav: 'preto'});this.getData('g', true);}}>
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
                                        { label: 'Agosto', value: 'Agosto' },
                                    ]}
                                />
                            </View>

                            {/* <LastUpdate/> */}
                        </View>

                        {/* {(this.state.selectNav == preto)} */}
                        <View style={styles.boxList}>
                            <View style={[styles.boxListTop, { backgroundColor: '#E6F2F0'}]}>
                                <MaterialIcon name="store" size={16} style={[styles.iconInfo, {color: '#14CC82'}]}></MaterialIcon>
                                <Text style={styles.textListTop}>{this.state.dataSource.count_stores} LOJAS</Text>
                                <MaterialIcon name="event-available" size={16} style={[styles.iconInfo, styles.iconInfoRight, {color: '#14CC82'}]}></MaterialIcon>
                                <Text style={styles.textListTop}>{this.state.dataSource.count_stores_enabled} CADASTRADAS</Text>
                            </View>

                            <View style={styles.viewBox}>
                                {this.state.dataRanking.map((item, key) => this.renderItem(key,item, this.props.navigation.state.params.owner, this.props.navigation))}
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