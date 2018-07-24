import React, { Component } from 'react';
import {Text, View, WebView, TouchableOpacity, Image} from 'react-native';
import styles from './styles';

import Curse from '../index';

export default class VideoBox extends Component {
    state={

    }
    componentDidMount(){
        this.setState({item:this.props.item});
    }
    gotoClass(navigation, item){
        // console.log(item)
        // if(item.progress == 'Módulo Novo'){
            navigation.navigate('Aula',{item});
            this.setState({ screen: 'Aula' });
        // }
    }
    render() {
        let navigation = this.props.navigation;
        let item = this.props.item;
        
        // console.log(item)

        return(
            <TouchableOpacity onPress={() => {this.gotoClass(navigation, item);}} navigation={this.props.navigation}>
            <View style={styles.video}>
                <Text style={[styles.status, item.progress=='Módulo Novo'?styles.statusNew:styles.statusCompleted]}>{item.progress.toUpperCase()}</Text>
                <View style = {styles.viewVideo}>
                    {/* <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} /> */}
                    <Image style={styles.thumbvideo} source={{ uri: 'https://i.ytimg.com/vi/'+item.video_url+'/hqdefault.jpg'}}/>
                </View>
            
                <View style={styles.videoInfo}>
                    <Text style={styles.videoTitle}>{item.title}</Text>
                    <Text style={styles.videoDescription}>{item.subtitle}</Text>
                        <Text style={styles.videoButton}>{item.progress=='Módulo Novo'?'ASSISTIR >':'Módulo completo'}</Text>
                </View>
            </View>
            </TouchableOpacity>
        );
    }
}