import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

import styles from './styles';
import api from '../../../../services/api';

export default class Course extends Component {
    static navigationOptions = {
        header: null
    };

    state={
        course: []
    }

    constructor (){
        super();
        this.getData();
    }

    getData = async () => {
        try{
            const response = await api.get('/courses/getLastCourse');
            var course = response.data.course;
            this.setState({course: response.data.course});
        } catch (response){
            this.setState({ errorMessage: response.data.message });
        }
    }

    render() {
        let color = this.props.color;
        return (
            <View style={styles.container}>
                <View style = {styles.viewVideo}>
                    <WebView source = {{ uri: 'https://www.youtube.com/embed/'+this.state.course.video_url }} />
                </View>
                <View style = {styles.description}>
                    <Text style={[styles.title, { color: color }]}>
                        {this.state.course.title}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.course.subtitle}
                    </Text>
                </View>
            </View>
        );
    }
}


