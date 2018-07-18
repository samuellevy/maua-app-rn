import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

import styles from './styles';

export default class Blog extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let item = this.props.item;
        let color = this.props.color;
        return (
            <View style={styles.container}>
                <View style={styles.description}>
                    <Text style={styles.text}>
                        {item.description}
                    </Text>
                </View>
                <View style={styles.viewVideo}>
                    <WebView source={{ uri: 'https://www.youtube.com/embed/'+item.url }} />
                </View>
            </View>
        );
    }
}


