import React, { Component } from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TouchableOpacity, Linking ,AsyncStorage, Modal, TextInput, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import styles from './styles';

import LastUpdate from './components/lastupdate';
import Loading from '../../../components/loading';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import RankingBox from './components/rankingbox';
import ListUser from './components/listEmployee';
import Performance from './components/performance';
//import RNPickerSelect from 'react-native-picker-select';

import { colors, metrics, fonts } from '../../../styles';

import api from '../../../services/api';
import rest from '../../../services/rest';

export default class storeManager extends Component {
    static navigationOptions = {
        title: 'products',
        headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
    };
    
    state = {
		id: 1,
        dataSource: [],
        dataListUser: [],
        typeUser: null,
        user:{
            name: null
        },
        isLoading: true,
        modalScene: 'regulamento'
    };
    
    constructor (){ 
        super();
        this.componentDidMount();
        this.userList();
    }
    
    componentDidMount(){
        this.getData();
        this.userList();
    }

    componentWillReceiveProps(){
        this.userList();
        this.getData();
        this.forceUpdate();
    }

    getData(){
        rest.get('/public/infos').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                user: rest.user,
                typeUser: rest.user.role
            });
        })
    }

    userList(){
		rest.get('/users/list').then((rest)=>{
			this.setState({
			  	isLoading: false,
			  	dataListUser: rest.users
            });
		})
    }

	listFunc() {
		return(
			<View>
				{this.state.dataListUser.map((user, index) => {
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
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }

        console.log("mostrar dataSource")
        console.log(this.state.dataSource)

        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <View styles={styles.titleScene}>
                        <Text style={styles.titleSceneTxt}>Duas Irmãs Materiais de Construção</Text>
                    </View>
                    <View style={styles.filter}>
                        <Text style={styles.textSelect}>{this.state.category}</Text>

                        {/* <RNPickerSelect
                            selectedValue={this.state.category}
                            placeholder={{}}
                            onValueChange={itemValue => this.setState({ category: itemValue })}
                            // style={[pickerStyle, styles.select]}
                            items={[
                                { label: 'Novembro', value: 'Novembro' },
                                { label: 'Dezembro', value: 'Dezembro' },
                            ]}
                        /> */}
                    </View>

                    <RankingBox user={this.state.user}/>
                    <LastUpdate/>

                    <Text style={styles.titleItem}>Vendas do mês</Text>

                    <View style={styles.desempenho}>
                        <Performance item={this.state.dataSource.sales} />
                    </View>

                    <Text style={styles.titleItem}>Equipe</Text>

                    <View style={styles.listUSer}>
                        {this.listFunc()}
                    </View>
                </ScrollView>
            </View>
        );
    }
}



const pickerStyle = {
	inputIOS: {
		color: 'black',
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'black',
	},
	placeholderColor: 'black',
	underline: { borderTopWidth: 0 },
	icon: {
		position: 'absolute',
		backgroundColor: 'transparent',
		borderTopWidth: 5,
		borderTopColor: '#00000099',
		borderRightWidth: 5,
		borderRightColor: 'transparent',
		borderLeftWidth: 5,
		borderLeftColor: 'transparent',
		width: 0,
		height: 0,
		top: 20,
		right: 15,
	},
};