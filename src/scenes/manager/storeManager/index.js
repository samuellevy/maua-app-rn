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
// import RNPickerSelect from 'react-native-picker-select';

import Header from '../../../components/header';

import { colors, metrics, fonts } from '../../../styles';

import api from '../../../services/api';
import rest from '../../../services/rest';

export default class storeManager extends Component {
    static navigationOptions = {
        // header: ({ navigation }) => (<Header navigation={navigation}/>),
        title: 'Dados da Loja',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
        headerTitleStyle: { color: 'white' },
    };

    state = {
		id: 1,
        dataSource: [],
        dataListUser: [],
        typeUser: null,
        store: [],
        points: [],
        sales: [],
        ranking: null,
        user:{
            name: null
        },
        isLoading: true,
        modalScene: 'regulamento'
    };
    
    constructor (props){ 
        super(props);
        console.log(props.navigation.state.params);
        this.userList(props.navigation.state.params.item.id);
        this.getData(props.navigation.state.params.item.id);
    }

    componentWillReceiveProps(){
        this.getData(props.navigation.state.params.item.id);
        this.userList(props.navigation.state.params.item.id);
        // this.forceUpdate();
    }

    getData(store_id){
        rest.get('/manager/infos/'+store_id).then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                user: rest.user,
                store: rest.store,
                ranking: rest.ranking,
                typeUser: rest.user.role,
                points: rest.points,
                sales: rest.sales
            });
        })
    }

    userList(store_id){
		rest.get('/users/list/'+store_id).then((rest)=>{
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
                        <Text style={styles.titleSceneTxt}>{this.state.store.name}</Text>
                    </View>
                    <View style={styles.filter}>
                        {/* <Text style={styles.textSelect}>{this.state.category}</Text> */}

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
                        <Performance item={this.state.sales} />
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