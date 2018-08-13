import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


export default class Employee extends Component { 
  	render() {
        let user = this.props.user;
        let iconSelect    = this.props.icon;
        let nameUser      = this.props.nameUser;
        let message      = this.props.message;
        // let navigator     = this.props.navigator;
  
    	return ( 
			<View style={styles.container}> 
				<View style={styles.boxUser}>
                    <View style={styles.boxName}>
                        <Text style={styles.nameUser}>{user.name}</Text>
                        <MaterialIcon name={!user.completed ? "error" : "done"} size={15} style={!user.completed ? styles.iconAlert : styles.iconDone} color={"#ddd"}></MaterialIcon>
                    </View>
                    
                    <Text style={styles.textInfo}>{user.course_status}</Text>
                </View>

                <View style={styles.boxIconEdit}>
                    <View style={styles.clearBtn}>
                        {/* <MaterialIcon name="create" size={25} style={styles.iconEdit}></MaterialIcon> */}
                    </View>
                </View>
			</View>
	    ); 
  	}
}


