import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default class Alert extends Component {
 
  	render() {

        let mensager = this.props.mensager;

    	return (  
			<View style={styles.contentAlert}>
                <View style={styles.boxAlert}>
                    <View style={styles.boxIcon}>
                        <MaterialIcon name="done" size={15} style={styles.iconDone}></MaterialIcon>
                    </View>
  
                    <Text style={styles.textAlert}>{mensager}</Text>
                </View>
            </View>
	    ); 
  	}
}


