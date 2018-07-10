import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class General extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let total = this.props.total;
        let ranking = this.props.ranking;

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxLeft]}>
                            <Text style={styles.splitTitle}>{'Ranking'.toUpperCase()}</Text>
                        </View>
                        <View style={styles.boxSplitText}>
                            <Text style={styles.splitText}>{ranking}º Lugar</Text>
                        </View>
                    </View>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxRight]}>
                            <Text style={styles.splitTitle}>{'Pontuação'.toUpperCase()}</Text>
                        </View>
                        <Text style={[styles.splitText, styles.splitTextScore]}>{total} ponto{total>1?'s':''}</Text>
                    </View>
                </View>
            </View>
        );
    }
}


