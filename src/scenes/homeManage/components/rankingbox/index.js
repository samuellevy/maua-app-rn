import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default class RankingBox extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let user = this.props.user;

        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxLeft]}>
                            <Text style={styles.splitTitle}>{'Ranking'.toUpperCase()}</Text>
                        </View>
                        <View style={styles.boxSplitText}>
                            <Text style={styles.splitText}>{user.ranking}º Lugar</Text>
                        </View>
                    </View>
                    <View style={styles.split}>
                        <View style={[styles.splitTitleBox, styles.splitTitleBoxRight]}>
                            <Text style={styles.splitTitle}>{'Pontuação'.toUpperCase()}</Text>
                        </View>
                        <Text style={[styles.splitText, styles.splitTextScore]}>{user.pontuacao>0?user.pontuacao + ' pontos':'nenhum'}</Text>
                    </View>
                </View>
            </View>
        );
    }
}


