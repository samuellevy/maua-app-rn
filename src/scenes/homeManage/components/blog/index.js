import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default class Blog extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let color = this.props.color;
        let item = this.props.item;
        return (
            <View style={styles.container}>
                
                <View style = {styles.description}>
                    <Text style={styles.title}>
                        {item.title}
                    </Text>
                    <Text style={styles.text}>
                        {item.description}
                    </Text>
                </View>
                <Image
                    style={styles.image}
                    source={{url: item.image}}
                />
            </View>
        );
    }
}


