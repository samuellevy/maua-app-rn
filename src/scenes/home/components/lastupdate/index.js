import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './styles';

export default class LastUpdate extends Component {
    static navigationOptions = {
        header: null
    };

    extractDate(a) {
        "use strict";
        var input, monthNames, day, month, year;    
        //we can chain the methods for "input" variable:
        input = a.split("T")[0].split("-");
        day = input[2];
        month = input[1];
        year = input[0];
        monthNames = "Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro";
        monthNames = monthNames.split(",");
        return day + ' de ' + monthNames[Number(month) - 1] + " de " + year;
    }

    render() {
        let configs = this.props.configs;
        return (
            <Text style={styles.lastUpdate}>
                Última atualização: {this.extractDate(configs.last_update)}
            </Text>
        );
    }
}


