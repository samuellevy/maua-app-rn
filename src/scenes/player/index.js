import React, { Component } from 'react';

import { View, Image, Modal, TouchableOpacity } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

import styles from './styles';

export default class Player extends Component {
    state = {
        isModalVisible: false
    };

    enterFullScreen(){
        this.setState({isModalVisible:true});
    }

    exitFullScreen(){
        this.setState({isModalVisible:false});
    }

    render() {
        let item = this.props.item;
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{this.enterFullScreen()}}>
                    <Image style={styles.thumbvideo} source={{ uri: 'https://i.ytimg.com/vi/'+item.video_url+'/hqdefault.jpg'}}/>
                </TouchableOpacity>
                <Modal visible={this.state.isModalVisible}>
                    <VideoPlayer style={styles.videoPlayer} source={{ uri: item.movie_url }} navigator={ this.props.navigator} paused={false} onBack={()=>{this.exitFullScreen()}} />
                </Modal>
            </View>
        );
    }
}