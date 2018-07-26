import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import Loading from '../../../../components/loading';
import styles from './styles';
import rest from '../../../../services/rest';

export default class Course extends Component {
    static navigationOptions = {
        header: null
    };

    state={
        dataSource: []
    }

    constructor (){
        super();
        this.state = {
            isLoading: true,
            dataSource: [],
            disable: false,
        }
        this.getData();
    }

    getData() {
        rest.get('/courses/getLastCourse').then((rest)=>{
            if(rest.course!=null){
                this.setState({dataSource: rest, isLoading: false});
            }else{
                this.setState({disable: true, isLoading: false});
            }
        });
    }

    render() {
        let color = this.props.color;
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        if(this.state.disable){
            return(
                <View style={styles.container}>
                    <Text style={[styles.title, { color: color, textAlign: 'center'}]}>
                        Nenhum curso disponível no momento
                    </Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View style = {styles.viewVideo}>
                    <WebView source = {{ uri: 'https://www.youtube.com/embed/'+this.state.dataSource.course.video_url }} />
                </View>
                <View style = {styles.description}>
                    <Text style={[styles.title, { color: color }]}>
                        {this.state.dataSource.course.title}
                    </Text>
                    <Text style={styles.text}>
                        {this.state.dataSource.course.subtitle}
                    </Text>
                </View>
            </View>
        );
    }
}


