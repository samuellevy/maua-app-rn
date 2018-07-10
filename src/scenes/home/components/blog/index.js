import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default class Blog extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let color = this.props.color;
        return (
            <View style={styles.container}>
                
                <View style = {styles.description}>
                    <Text style={styles.title}>
                        Como fazer um muro chapiscado e quais suas vantagens? 
                    </Text>
                    <Text style={styles.text}>
                        Para preparar a massa usada na construção de um muro chapiscado, é necessário seguir alguns passos específicos. Conheça as melhores práticas.
                    </Text>
                </View>
                <Image
                    style={styles.image}
                    source={require('../../../../../assets/img/cimento_maua.jpg')}
                />
            </View>
        );
    }
}


