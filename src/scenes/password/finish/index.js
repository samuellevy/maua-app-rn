import React, { Component } from 'react';

import { View, Text, Image, TouchableOpacity, ScrollView, Platform } from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { colors } from '../../../styles';

export default class Finish extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        username: null,
        password: null,
        errorMessage: null,
        remember: false
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Login'); this.setState({ screen: 'Login' }) }}>
                        <View style={styles.turnBack}>
                            <MaterialCommunityIcon name="arrow-left" size={19} style={styles.iconBack} />
                            <Text style={styles.txtBack}>{'Login'.toUpperCase()}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View scrollEnabled={Platform.OS == 'ios' ? false : true} style={styles.content}>
                    <View style={styles.boxWelcome}>
                        <Image
                            style={styles.image}
                            source={require('../../../../assets/img/checked.png')}
                        />
                        <Text style={styles.txtWelcome}>E-mail enviado!</Text>
                        <Text style={styles.txtInitial}>Fique ligado no seu e-mail para redefinir sua senha.</Text>
                    </View>
                </View>
            </View>
        );
    }
} 
