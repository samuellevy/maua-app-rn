import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

import styles from './styles';

export default class Blog extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let color = this.props.color;
        return (
            <View style={styles.container}>
                <View style={styles.description}>
                    <Text style={styles.text}>
                        Está com dúvidas? Assista ao vídeo de introdução ao Curso de Capacitação.
                    </Text>
                </View>
                <View style={styles.viewVideo}>
                    <WebView source={{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} />
                </View>
            </View>
        );
    }
}


