import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
const timer = require('react-native-timer');
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import api from '../../services/api';

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

    getUserData = async () => {
        try{
            const response = await api.get('/users/list'); 
            var arrayUser = response.data.users;
			console.log(arrayUser)
			console.log('try')
            this.setState({arrayUser: arrayUser});
        } catch (response){
			console.log('catch')
            this.setState({ errorMessage: response.data.message });
        }
    }

	listFunc() {
		return(
			<View>
				{this.state.arrayUser.map((arrayUser, index) => {
					return(
						<View key={index}>
							<TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('addEmployee', {user: arrayUser.id});}}>
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
						<TouchableOpacity style={styles.addBtn} onPress={() => { this.props.navigation.navigate('addEmployee'); this.setState({ screen: 'addEmployee' }) }}>
							<View style={styles.boxIcon}>
								<MaterialIcon name="add" size={15} style={styles.iconClear}></MaterialIcon>
							</View>
							<Text style={styles.textBtn}>ADICIONAR FUNCIONÁRIO</Text>
						</TouchableOpacity>
					</View> 
					   
					{/* <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('addEmployee');}}>
						<ListUser icon={true} nameUser="Ronald Junger" mensager="Todos os módulos foram completos!" />
					</TouchableOpacity> */}
					{this.listFunc()}
					{/* <ListUser icon={false} idUser={2} nameUser="Kayalla Pontes" mensager="Nunca acessou ao curso!" navigator={() => {this.props.navigation.navigate('addEmployee', this.state.id);}}/>
					<ListUser icon={false} idUser={3} nameUser="Samuel Levy" mensager="Ainda não completou o módulo desse mês." navigator={() => {this.props.navigation.navigate('addEmployee', this.state.id);}}/>
					<ListUser icon={false} idUser={4} nameUser="Vinicius Machado" mensager="Está atrasado no curso: faltam 2 módulos!" navigator={() => {this.props.navigation.navigate('addEmployee', this.state.id);}}/> */}
				</ScrollView>
			</View>
	    ); 
  	}
}


