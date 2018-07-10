import React, { Component } from 'react';

import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

// import styles from './styles';

export default class Player extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Video source={{uri: "https://www.w3schools.com/htmL/mov_bbb.mp4"}}   // Can be a URL or a local file.
                    ref={(ref) => {
                        this.player = ref
                    }}                                      // Store reference
                    onBuffer={this.onBuffer}                // Callback when remote video is buffering
                    onEnd={this.onEnd}                      // Callback when playback finishes
                    onError={this.videoError}               // Callback when video cannot be loaded
                    onFullscreenPlayerWillPresent={this.fullScreenPlayerWillPresent} // Callback before fullscreen starts
                    onFullscreenPlayerDidPresent={this.fullScreenPlayerDidPresent}   // Callback after fullscreen started
                    onFullscreenPlayerWillDismiss={this.fullScreenPlayerWillDismiss} // Callback before fullscreen stops
                    onFullscreenPlayerDidDismiss={this.fullScreenPlayerDidDismiss}  // Callback after fullscreen stopped
                    style={styles.backgroundVideo} />

            </View>
        );
    }
}

// Later on in your styles..
var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  });