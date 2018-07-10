import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
import { colors } from '../../styles';

import { View } from 'react-native';
import Title from '../../components/title/primary';
import Button from '../../components/button';

import styles from './styles';

export default class FeedBack extends Component {
    state = {
        message: null,
    };

    render() { 
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <View style={styles.contentDescription}>
                        <Title textContent={"CURSO DE CAPACITAÇÃO"} />
                        <Text style={styles.title}>MÓDULO 03</Text>
                        <Text style={styles.descriptionTitle}>Cimento CP II: tudo o que você precisa saber </Text> 
                        <Text style={styles.description}>Conheça a categoria de cimentos ideal para obras internas e acabamento.</Text> 

                        <View style = {styles.viewVideo}> 
                            {/* <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} /> */}
                            <Image style={styles.thumbvideo} source={{ uri: 'http://img.youtube.com/vi/AbN7lbjOUho/maxresdefault.jpg'}}/> 
                        </View>
                    </View>

                    <View style={styles.askTest}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('Answers'); this.setState({ screen: 'Answers' }) }}>
                            <Text style={styles.btnText}>TESTE CORRIGIDO</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View> 
        );
    }
}