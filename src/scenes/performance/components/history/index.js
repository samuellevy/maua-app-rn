import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { colors } from '../../../../styles'

import styles from './styles';


export default class History extends Component {
    extractDate(a) {
      	"use strict";
      	var input, monthNames, day, month, year;    
      	//we can chain the methods for "input" variable:
      	input = a.split("T")[0].split("-");
      	day = input[2];
      	month = input[1];
      	year = input[0];
      	monthNames = "Janeiro,Fevereiro,Março,Abril,Maio,Junho,Julho,Agosto,Setembro,Outubro,Novembro,Dezembro";
      	monthNames = monthNames.split(",");
      	return day + '/' + month;
	}

	componentWillReceiveProps(){
        this.forceUpdate();
    }
	  
	trunc(text) {
		return text.length > 20 ? `${text.substr(0, 20)}...` : text;
	}

  	render() {
    	let date = this.props.date;
    	let description = this.props.description;
    	let score = this.props.score;
    	let child = this.props.child;

    	// switch (child) {
    	//   case 'last':
    	//     border = borderOn;
    	//     break;
    	//   case 'not-last':
    	//     border = borderOff;
    	//     break;
    	// }
		
		return (
			<View style={[styles.container,{borderBottomWidth:1, borderBottomColor:colors.regular}]}>
				<View style={styles.dateCell}>
					<Text style={styles.date}>{this.extractDate(date)}</Text>
				</View>
				<View style={styles.introCell}>
					<Text style={styles.description}>{this.trunc(description)}</Text>
					<Text style={styles.score}>{score>0 && '+'}<Text style={styles.bold}>{score}</Text> pts</Text>
				</View>
			</View>
		);
  	}
}
