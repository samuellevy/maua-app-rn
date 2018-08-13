import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

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

    renderItem(key, item){
        return (
            <View key={key} style={styles.items}>
                <View style={styles.position}>
                    <Text style={styles.textPosition}>{item.position}º</Text>
                </View>
                <View style={styles.nameUser}>
                    <Text style={styles.textItem}>{this.trunc(item.name)}</Text>
                </View>
                <View style={styles.ponts}>
                    <Text style={styles.textItem}>{item.total} pt</Text>
                    <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                </View>
            </View> 
        )
    }

    render() {
        let categoria = this.props.categoria;
        let colorBg = this.props.colorBg;
        let colorBgIcon = this.props.colorBgIcon;
        var ranking = this.props.ranking;

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
                    {this.state.dataRanking.map((item, key) => this.state.user.id == item.user_id && this.renderItem(key,item))}
                </View>
            </View>
        );
    }
}


