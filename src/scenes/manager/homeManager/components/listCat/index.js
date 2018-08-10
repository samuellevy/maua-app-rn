import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';

import styles from './styles';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default class Blog extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let categoria = this.props.categoria;
        let colorBg = this.props.colorBg;
        let colorBgIcon = this.props.colorBgIcon;
        return (
            <View style={styles.container}>
                <View style={styles.contentTop}>
                    <View style={[styles.boxTop, {backgroundColor: colorBg}]}>
                        {/* <View style={[styles.circle, {backgroundColor: colorBgIcon}]}>
                            <MaterialIcon name={'info-outline'} size={25} style={styles.iconTop} color={"#fff"}></MaterialIcon>
                        </View> */}
                        <Text style={[styles.titleTop]}>CATEGORIA {categoria.toUpperCase()}</Text>
                    </View>
                </View>
                <View style={styles.viewBox}>
                    <View style={styles.items}>
                        <View style={styles.position}>
                            <Text style={styles.textPosition}>1º</Text>
                        </View>
                        <View style={styles.nameUser}>
                            <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
                        </View>
                        <View style={styles.ponts}>
                            <Text style={styles.textItem}>100 pt</Text>
                            <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.position}>
                            <Text style={styles.textPosition}>2º</Text>
                        </View>
                        <View style={styles.nameUser}>
                            <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
                        </View>
                        <View style={styles.ponts}>
                            <Text style={[styles.textItem]}>100 pt</Text>
                            <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.position}>
                            <Text style={styles.textPosition}>2º</Text>
                        </View>
                        <View style={styles.nameUser}>
                            <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
                        </View>
                        <View style={styles.ponts}>
                            <Text style={[styles.textItem]}>100 pt</Text>
                            <MaterialIcon name="chevron-right" size={18} style={styles.iconArrow}></MaterialIcon>
                        </View>
                    </View>
                    <View style={styles.items}>
                        <View style={styles.position}>
                            <MaterialIcon name="warning" size={15} style={[styles.alertRed, styles.iconAlert]}></MaterialIcon>
                        </View>
                        <View style={styles.nameUser}>
                            <Text style={styles.textItem}>Rede MJ Oliveira Mundo dos…</Text>
                        </View>
                        <View style={styles.ponts}>
                            <Text style={[styles.textItem,styles.alertRed]}>INATIVO</Text>
                            <MaterialIcon name="chevron-right" size={18} style={[styles.alertRed, styles.iconArrow]}></MaterialIcon>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


