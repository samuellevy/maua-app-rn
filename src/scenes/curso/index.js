import React, { Component } from 'react';

import { View, Text, Image, TextInput, ScrollView, ScrollSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
// import { colors } from '../../styles';
import Title from '../../components/title/primary';

import Video from './components/videobox';
import api from '../../services/api';
import Header from '../../components/header';

export default class ListCurso extends Component {
    static navigationOptions = {
        // header: null,
        title: 'Curso',
        header: ({ navigation }) => (<Header navigation={navigation} backTo={null}/>),
        transition: null
    };
    state={
        courses: [],
    }

    constructor (){
        super();
        this.getData();
    }

    getData = async () => {
        try{
            const response = await api.get('/courses/get');
            var courses = response.data.courses;
            console.log(courses);
            this.setState({courses: response.data.courses});
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    componentWillReceiveProps(){
        this.getData();
        this.forceUpdate();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.videoList}>
                    <View style={styles.containerVideo}>
                    <Title textContent="Curso de Capacitação"/>
                        {this.state.courses.map((item, key) => (
                            <Video navigation={this.props.navigation} key={key} item={item} /> 
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
