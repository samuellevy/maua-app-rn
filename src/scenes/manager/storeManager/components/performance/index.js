import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Pie from '../../../../../components/pie';
import Loading from '../../../../../components/loading';


export default class Performance extends Component {
    static navigationOptions = {
        header: null
    };

    state ={
        percent: 0,
        isLoading: true,
    }

    constructor(props){
        super(props);
    }

    componentWillReceiveProps(props){
        this.setState({
            percent: props.item.percent,
            isLoading: false,
        });
    }

    render() {
        let item = this.props.item;
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }

        return (
            <View style={styles.container}>
                <View style={styles.splitLeft}>
                {/* <Text style={styles.text}>{item.percent>60?'Quase lá! Falta apenas ':'Vamos lá! Falta '}<Text style={{ fontWeight: "bold" }}>{100 - item.percent}%</Text> para sua loja completar a meta do mês!</Text> */}
                    {/* <Text style={styles.dateTitle}>{(item.month_name + ' de ' + item.year).toUpperCase()}</Text> */}
                    <View style={styles.table}>
                        <View>
                            <Text style={styles.tableTitle}>Meta do mês</Text>
                            <Text style={styles.tableText}>{item.goal} sacos</Text>
                        </View>
                        <View>
                            <Text style={styles.tableTitle}>Vendas {item.percent}</Text>
                            <Text style={styles.tableText}>{item.quantity} sacos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.splitRight}>
                    <Pie percent={parseInt(this.state.percent)} />
                </View>
            </View>
        );
    }
}


