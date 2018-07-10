import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ART, Platform, Animated, Easing } from 'react-native';
import styles from './styles';
const timer = require('react-native-timer');
import Pie from  'react-native-pie';
 

export default class Home extends Component {
	state = {
		percentValue: 0,
		percent: this.props.percent
	}
    
	componentDidMount() {
		this.setState({percentValue: this.state.percentValue}, () => timer.setInterval(
            this, 'animatePie', () => 
            {
				deltaPercent = this.state.percent / 10;
                if(this.state.percentValue != this.state.percent){
                    this.setState({percentValue: this.state.percentValue+deltaPercent})
                }
            }
            , 25
        ));
	}
		
	render() {
		//let percent = this.props.percent;
		return ( 
			<View style={styles.container}>
				<View>
					{/* <Animated.View style={[styles.block, {marginLeft} ]} /> */}
					<Pie
						radius={50} 
						innerRadius={35}
						series={[this.state.percentValue]} 
                        colors={['#00A6E3']}
						backgroundColor='#ddd' />
					
					<View style={styles.gauge}>
						<Text style={styles.gaugeText}>{this.state.percent}%</Text>
					</View>
				</View>
			</View>
		);
	}
};