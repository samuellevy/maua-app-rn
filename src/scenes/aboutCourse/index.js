import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import TitlePrimary from '../../components/title/primary';
import Rankingbox from './components/rankingbox';

import { colors, metrics, fonts } from '../../styles';

export default class AboutCourse extends Component {
    static navigationOptions = {
        title: 'products',
        headerRight:<View style={{flex:1, backgroundColor: 'black', height: 50}}><Text>HOME</Text></View>
    };
  
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <TitlePrimary textContent={"O QUE É O PROGRAMA"} />

                    <Text style={styles.text}>Olá! Veja nosso vídeo e entenda tudo sobre o Programa de Incentivo Cimento Mauá.</Text>

                    <View style = {styles.viewVideo}>
                        {/* <WebView source = {{ uri: 'https://www.youtube.com/embed/fBrOtR3pgPU' }} /> */}
                        <Image style={styles.thumbvideo} source={{ uri: 'https://i.ytimg.com/vi/CSZxjQwDKF0/hqdefault.jpg'}}/>
                    </View>

                    <Text style={styles.titleSecondary}>Pontuação</Text>

                    <Text style={styles.text}>A competição acontece através dos pontos acumulados durante o programa.</Text>

                    <Text style={styles.text}>Existem duas maneiras de acumular pontos: completando o <Text style={styles.negrito}>curso de capacitação</Text> e através das <Text style={styles.negrito}>vendas mensais.</Text></Text>

                    <View style={styles.boxTable}>
                        <View style={styles.boxContent}>
                            <View style={styles.infoBox}>
                                <Text style={styles.textTable}>Toda equipe completou o módulo</Text>
                                <Text style={styles.textScore}><Text style={styles.destaqueText}>25</Text> pts</Text>
                            </View>
                            <View style={styles.infoBox}>
                                <Text style={styles.textTable}>Meta mensal atingida => 100% - 115%</Text>
                                <Text style={styles.textScore}><Text style={styles.destaqueText}>50</Text> pts</Text>
                            </View>
                            <View style={styles.infoBox}>
                                <Text style={styles.textTable}>Meta mensal atingida => 116% - 145%</Text>
                                <Text style={styles.textScore}><Text style={styles.destaqueText}>75</Text> pts</Text>
                            </View>
                            <View style={styles.infoBox}>
                                <Text style={styles.textTable}>Meta mensal atingida => acima de 146%</Text>
                                <Text style={styles.textScore}><Text style={styles.destaqueText}>100</Text> pts</Text>
                            </View>
                            <View style={styles.boxResult}>
                                <Text style={styles.textBold}>BÔNUS</Text>
                                <Text style={styles.textResult}>Cadastro de funcionários</Text>
                                <Text style={styles.textResult}>20 pts</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.titleSecondary}>Prêmios</Text>

                    <Text style={styles.text}>Nossa premiação é mensal e ganha quem acumular mais pontos! Os funcionários das 4 lojas que mais pontuaram ao final de cada mês serão <Text style={styles.destaqueGreen}>recompensados com vouchers.</Text></Text>

                    <Rankingbox />

                    <Text style={styles.titleSecondary}>Premiação final</Text>

                    <Rankingbox />
                </ScrollView>
            </View>
        );
    }
}