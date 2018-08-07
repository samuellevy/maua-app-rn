import React, { Component } from 'react';
import { View, Text, WebView, Image } from 'react-native';

import styles from './styles';
import Player from '../../../player';

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
                    {/* <Player item={item}/> */}
                    {/* <WebView source={{ uri: 'https://www.youtube.com/embed/'+item.url }} /> */}
                    <Image style={styles.thumbvideo} source={{ uri: 'https://i.ytimg.com/vi/'+item.video_url+'/hqdefault.jpg'}}/>
                </View>
            </View>
        );
    }
}


