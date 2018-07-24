import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
const timer = require('react-native-timer');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import rest from '../../services/rest';

import TitleTop from '../../components/title/primary';
import ListUser from './components/listEmployee';

export default class Employee extends Component {
  	static navigationOptions = {
    	title: 'products',
    	headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
	};

    constructor(props) {
		super(props);
		this.getUserData();
    }

	state = {
		id: 1,
		arrayUser: [],
	}

    componentWillReceiveProps(){
        this.forceUpdate();
    }

    getUserData = async () => {
		rest.get('/users/list').then((rest)=>{
			console.log('aqui')
			this.setState({
			  	isLoading: false,
			  	arrayUser: rest.users
			});
		})
    }

	listFunc() {
		return(
			<View>
				{this.state.arrayUser.map((arrayUser, index) => {
					return(
						<View key={index}>
							<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('addEmployee', {userId: arrayUser.id})} }>
								<ListUser icon={arrayUser.completed} nameUser={arrayUser.name} message={arrayUser.course_status} />
							</TouchableOpacity>
						</View>
					)
				})}
			</View>
		)
	}
	  
  	render() { 
    	return (   
			<View style={styles.container}>   
				<ScrollView style={{marginBottom: 50, padding: 18}}>
					<TitleTop textContent={'FUNCIONÁRIOS'} />
 
					<View style={styles.addEmplayee}>
						<TouchableOpacity style={styles.addBtn} onPress={() => { this.props.navigation.navigate('addEmployee', {userId: null})} }>
							<View style={styles.boxIcon}>
								<MaterialIcon name="add" size={15} style={styles.iconClear}></MaterialIcon>
							</View>
							<Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
						</TouchableOpacity>
					</View> 
					
					{this.listFunc()}
				</ScrollView>
			</View>
	    ); 
  	}
}


