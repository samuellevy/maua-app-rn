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
		title: '',
		headerTintColor: 'white',
		headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
		headerTitleStyle: { color: 'white' },
	};

    constructor(props) {
		super(props);
		this.getData();
    }

	state = {
		id: 1,
		dataSource: [],
	}

    componentWillReceiveProps(){
		this.getData();
        this.forceUpdate();
    }

    getData(){
		rest.get('/users/list').then((rest)=>{
			this.setState({
			  	isLoading: false,
			  	dataSource: rest.users
			});
		})
    }

	listFunc() {
		return(
			<View>
				{this.state.dataSource.map((user, index) => {
					return(
						<View key={index}>
							<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('addEmployee', {userId: user.id})} }>
								<ListUser user={user} />
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
 
					<View style={styles.addEmployee}>
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


