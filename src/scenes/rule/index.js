import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './styles';

import NavIcon from '../../components/navigation/NavIcon';
import ModalBox from '../../components/modal/modalStyle'

export default class Rule extends Component {
    static navigationOptions = {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
            let iconName = `ios-options`;
            return <NavIcon title={'Home'} icon={'home'}/>;
        },
    };

    state = {
        modal: [
            {
                titleModal: 'FALTA POUCO!',
                icon: 'school',
                iconColor: '#fff',
                colorTop: '#00985B',
                video: null,
                textBtn: 'ACESSAR CURSO',
                titleDescription: 'Módulo 3: Cimento texturizado',
                description: 'Você tem módulos a fazer no curso de capacitação. Complete-os agora e acumule pontos para sua loja.',
            }
        ]
    }
     
    render() { 
        return (
            <View style={styles.container}>
                {/* {
                    this.state.modal.map(modal => <ModalBox data={modal} /> )
                } */}
                <ScrollView>
                    <View style={styles.ruleContent}>
                        <Text style={styles.ruleTitle}>
                            {'Regulamento'.toUpperCase()}
                        </Text>
                        <Text style={styles.ruleParagraph}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id mauris molestie, vestibulum nibh eu, finibus sem. 
                        </Text>
                        <Text style={styles.ruleParagraph}>
                            Quisque hendrerit feugiat nisl, eu gravida dolor tincidunt et. Nam gravida mattis tellus et elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed venenatis a nibh ut posuere. Suspendisse malesuada sed nibh sit amet pretium. Donec euismod volutpat tempor. Vivamus tristique interdum feugiat. Fusce aliquet sem mi, sed condimentum velit commodo sit amet. Nunc felis ipsum, scelerisque non condimentum ac, volutpat quis velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla sit amet tellus id nulla ullamcorper finibus. 
                        </Text>
                        <Text style={styles.ruleParagraph}>
                            In tempus, risus quis ullamcorper sodales, ante odio blandit ligula, euismod rutrum quam sem auctor tellus. Ut faucibus diam a semper faucibus.
                        </Text>
                        <Text style={styles.ruleParagraph}>
                            Phasellus ligula arcu, imperdiet faucibus risus ac, egestas convallis lectus. In arcu felis, euismod quis urna quis, mollis dignissim felis. Ut aliquam cursus lacus, in condimentum odio lobortis rhoncus. Fusce et feugiat enim, non hendrerit justo. Sed scelerisque, mi non fringilla consectetur, leo ipsum rhoncus justo, a finibus magna leo vitae lectus. Proin elit ipsum, porta vestibulum turpis eget, imperdiet sagittis lorem. Quisque vitae massa eu quam mattis pharetra at nec eros. Curabitur velit erat, vestibulum ut vestibulum vel, maximus eu mi. Suspendisse potenti. Sed vestibulum velit mi.
                        </Text>
                        <Text style={styles.ruleParagraph}>
                            Phasellus ligula arcu, imperdiet faucibus risus ac, egestas convallis lectus. In arcu felis, euismod quis urna quis, mollis dignissim felis. Ut aliquam cursus lacus, in condimentum odio lobortis rhoncus. Fusce et feugiat enim, non hendrerit justo. Sed scelerisque, mi non fringilla consectetur, leo ipsum rhoncus justo, a finibus magna leo vitae lectus. Proin elit ipsum, porta vestibulum turpis eget, imperdiet sagittis lorem. Quisque vitae massa eu quam mattis pharetra at nec eros. Curabitur velit erat, vestibulum ut vestibulum vel, maximus eu mi. Suspendisse potenti. Sed vestibulum velit mi.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}


