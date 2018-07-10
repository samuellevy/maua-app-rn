import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class RankingBox extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxLeft]}>
                            <Text style={styles.splitTitle}>{'1º LUGAR'.toUpperCase()}</Text>
                        </View>
                        <View style={styles.boxSplitText}>
                            <Text style={[styles.splitText, styles.textYellow]}>R$ 350,00</Text>
                        </View>
                    </View>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxRight, styles.colorGree]}>
                            <Text style={styles.splitTitle}>{'2º LUGAR'.toUpperCase()}</Text>
                        </View>
                        <Text style={[styles.splitText, styles.splitTextScore, styles.textGree]}>R$ 250,00</Text>
                    </View>
                </View>
                <View style={styles.box}>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxLeft, styles.colorGree]}>
                            <Text style={styles.splitTitle}>{'3º LUGAR'.toUpperCase()}</Text>
                        </View>
                        <View style={styles.boxSplitText}>
                            <Text style={[styles.splitText, styles.splitTextScore, styles.textGree]}>R$ 150,00</Text>
                        </View>
                    </View>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxRight, styles.colorGree]}>
                            <Text style={styles.splitTitle}>{'4º LUGAR'.toUpperCase()}</Text>
                        </View>
                        <Text style={[styles.splitText, styles.splitTextScore, styles.textGree]}>R$ 100,00</Text>
                    </View>
                </View>
            </View>
        );
    }
}


