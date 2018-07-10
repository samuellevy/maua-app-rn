import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


export default class Employee extends Component { 
  	render() {
        let iconSelect    = this.props.icon;
        let nameUser      = this.props.nameUser;
        let message      = this.props.message;
        // let navigator     = this.props.navigator;
  
    	return ( 
			<View style={styles.container}> 
				<View style={styles.boxUser}>
                    <View style={styles.boxName}>
                        <Text style={styles.nameUser}>{nameUser}</Text>
                        <MaterialIcon name={!iconSelect ? "error" : "done"} size={15} style={!iconSelect ? styles.iconAlert : styles.iconDone} color={"#ddd"}></MaterialIcon>
                    </View>
                    
                    <Text style={styles.textInfo}>{message}</Text>
                </View>

                <View style={styles.boxIconEdit}>
                    <TouchableOpacity style={styles.clearBtn}>
                        <MaterialIcon name="create" size={25} style={styles.iconEdit}></MaterialIcon>
                    </TouchableOpacity>
                </View>
			</View>
	    ); 
  	}
}


