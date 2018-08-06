import React, { Component } from 'react';
import { View, Text, WebView, Image } from 'react-native';
import Loading from '../../../../components/loading';
import styles from './styles';
import rest from '../../../../services/rest';
import Player from '../../../player';

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
                console.log(rest);
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
                    {/* <Player item={this.state.dataSource.course} style={{width: '100%', height: 200}}/> */}
                    {/* <WebView source = {{ uri: 'https://www.youtube.com/embed/'+this.state.dataSource.course.video_url }} /> */}
                    <Image style={styles.thumbvideo} source={{ uri: 'https://i.ytimg.com/vi/'+this.state.dataSource.course.video_url+'/hqdefault.jpg'}}/>
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


