import React, { Component } from 'react';
import { View, Text, WebView, TouchableOpacity } from 'react-native';

import styles from './styles';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rest from '../../../../../services/rest';
import Loading from '../../../../../components/loading';


export default class Blog extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);
        console.log(props);
        this.getData(props);
    }

    state = {
        dataRanking: [],
        dataSource: [],
        typeUser: null,
        quantity: 0,
        user:{
            name: null
        },
        isLoading: true,
    };
    

    trunc(text) {
        return text.length > 20 ? `${text.substr(0, 20)}...` : text;
    }

    componentDidMount(){
        
    }

    getData(props){
        rest.get('/manager/ranking/'+props.category).then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                user: rest.user,
                typeUser: rest.user.role,
                dataRanking: rest.ranking
            });
        })
    }

    renderItem(key, item, navigation){
        if(this.state.user.id == item.user_id){
            return (
                <TouchableOpacity key={key} onPress={() => {navigation.navigate('StoreManager', {item: item})}}>
                    <View key={key} style={styles.items}>
                        <View style={styles.position}>
                            <Text style={styles.textPosition}>{item.position}º</Text>
                        </View>
                        <View style={styles.nameUser}>
                            <Text style={styles.textItem}>{this.trunc(item.name)}</Text>
                        </View>
                        <View style={{flexDirection: 'row',}}>
                            <View style={{flexDirection: 'row',}}>
                                <Text style={[styles.textItem, {color: "#000000"}]}>{item.total} </Text>
                                <Text style={[styles.textItem]}>pt</Text>
                            </View>
                            <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
    }

    render() {
        let categoria = this.props.categoria;
        let colorBg = this.props.colorBg;
        let colorBgIcon = this.props.colorBgIcon;
        var ranking = this.props.ranking;
        var navigation = this.props.navigation;

        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        
        return (
            <View style={styles.container}>
                <View style={styles.contentTop}>
                    <View style={[styles.boxTop, {backgroundColor: colorBg}]}>
                        {/* <View style={[styles.circle, {backgroundColor: colorBgIcon}]}>
                            <MaterialIcon name={'info-outline'} size={25} style={styles.iconTop} color={"#fff"}></MaterialIcon>
                        </View> */}
                        <Text style={[styles.titleTop]}>CATEGORIA {categoria.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.viewBox}>
                    {this.state.dataRanking.map((item, key) => this.renderItem(key, item, navigation))}
                </View>
            </View>
        );
    }
}


