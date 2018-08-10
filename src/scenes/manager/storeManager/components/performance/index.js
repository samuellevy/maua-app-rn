import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Pie from '../../../../../components/pie';

export default class Performance extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let item = this.props.item;
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


