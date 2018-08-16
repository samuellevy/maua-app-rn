import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Pie from '../../../../components/pie';

export default class Sales extends Component {
    static navigationOptions = {
        header: null
    };

    generateMessage(percent){
        var message;
        if(percent>=60 && percent <= 100){
            message = <Text style={styles.text}>Quase lá! Falta apenas<Text style={{ fontWeight: "bold" }}>{100 - percent}%</Text> para sua loja completar a meta do mês!</Text>
        }
        else if(percent<60){
            message = <Text style={styles.text}>Vamos lá! Falta<Text style={{ fontWeight: "bold" }}>{100 - percent}%</Text> para sua loja completar a meta do mês!</Text>
        }
        else if(percent>100){
            message = <Text style={styles.text}>Vamos lá! Falta<Text style={{ fontWeight: "bold" }}>{100 - percent}%</Text> para sua loja completar a meta do mês!</Text>
        }
        return(
            message
        )
    }

    render() {
        let item = this.props.item;

        return (
            <View style={styles.container}>
                <View style={styles.splitLeft}>
                    {this.generateMessage(item.percent)}
                    <Text style={styles.dateTitle}>{(item.month_name + ' de ' + item.year).toUpperCase()}</Text>
                    <View style={styles.table}>
                        <View>
                            <Text style={styles.tableTitle}>Meta do mês</Text>
                            <Text style={styles.tableText}>{item.goal} sacos</Text>
                        </View>
                        <View>
                            <Text style={styles.tableTitle}>Vendas</Text>
                            <Text style={styles.tableText}>{item.quantity} sacos</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.splitRight}>
                    <Pie percent={item.percent} />
                </View>
            </View>
        );
    }
}


