import React, { Component } from 'react';
import {  View, Text, StyleSheet} from 'react-native';

export default class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.postTitle}> Post title </Text>
        <Text style={styles.postContent}> Skipping bundling in Debug for the Simulator (since the packager bundles for you). Use the FORCE_BUNDLING flag to change this behavior. Skipping bundling in Debug for the Simulator (since the packager bundles for you). Use the FORCE_BUNDLING flag to change this behavior. Skipping bundling in Debug for the Simulator (since the packager bundles for you). Use the FORCE_BUNDLING flag to change this behavior. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        padding: 15,
        margin: 5,
    },

    postTitle:{
        fontSize: 18,
        fontWeight: 'bold'
    },
});
