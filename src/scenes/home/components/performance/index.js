import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Pie from '../../../../components/pie';

export default class Performance extends Component {
    static navigationOptions = {
        header: null
    };

    generateMessage(percent){
        var message;
        if(percent>=60 && percent <= 100){
            message = <Text style={styles.text}>Quase lá! Falta apenas <Text style={{ fontWeight: "bold" }}>{100 - percent}%</Text> para sua loja completar a meta do mês!</Text>
        }
        else if(percent<60){
            message = <Text style={styles.text}>Vamos lá! Falta <Text style={{ fontWeight: "bold" }}>{100 - percent}%</Text> para sua loja completar a meta do mês!</Text>
        }
        else if(percent>=100 && percent <=115) {
            message = <Text style={styles.text}>Sonhando alto! Sua loja está perto de atingir 115% da meta mensal e acumular mais 50 pontos no ranking</Text>
        }
        else if(percent>=116 && percent <=144) {
            message = <Text style={styles.text}>Só mais um pouco! Sua loja está perto de passar os 145% da meta mensal e acumular mais 100 pontos no ranking!</Text>
        }
        else if(percent>=145) {
            message = <Text style={styles.text}>Ao infinito e além! Vocês garantiram mais 100 pontos.</Text>
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
                {/* <Text style={styles.text}>{item.percent>60?'Quase lá! Falta apenas ':'Vamos lá! Falta '}<Text style={{ fontWeight: "bold" }}>{100 - item.percent}%</Text> para sua loja completar a meta do mês!</Text> */}
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


