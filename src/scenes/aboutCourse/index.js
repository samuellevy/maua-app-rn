import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, WebView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavIcon from '../../components/navigation/NavIcon';
import styles from './styles';

import Header from '../../components/header';
import Nav from '../../components/navigation';
import TitlePrimary from '../../components/title/primary';
import Rankingbox from './components/rankingbox';
import stylePrime from './components/rankingbox/styles';

import { colors, metrics, fonts } from '../../styles';
import rest from '../../services/rest';
import Loading from '../../components/loading';

export default class AboutCourse extends Component {
    static navigationOptions = {
		title: '',
		headerTintColor: 'white',
		headerStyle: { backgroundColor: '#00985B', borderWidth: 1, borderBottomColor: 'white' },
		headerTitleStyle: { color: 'white' },
    };
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            points:[],
            total:null,
            ranking:null,
            percent:null,
            dataSource:[]
        }
    }

    componentWillMount(){
        rest.get('/pages/get/about').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest,
                typeUser: rest.user.role
            });
        })
    }

    typeUserSelect() {
        if(this.state.typeUser == 'Lojista') {
            return (
                <View>
                    <View style={stylePrime.container}>
                        <Text style={styles.titleSecondary}>Premiação final do lojista</Text>

                        <View style={stylePrime.box}>
                            <View style={stylePrime.split}>
                                <View style={[stylePrime.splitTitleBox, stylePrime.splitTitleBoxLeft]}>
                                    <Text style={stylePrime.splitTitle}>{'1º LUGAR'.toUpperCase()}</Text>
                                </View>
                                <View style={stylePrime.boxSplitText}>
                                    <Text style={[stylePrime.splitText, stylePrime.textYellow]}>R$ 1500,00</Text>
                                </View>
                            </View>
                            <View style={stylePrime.split}>
                                <View style={[stylePrime.splitTitleBox, stylePrime.splitTitleBoxRight, stylePrime.colorGree]}>
                                    <Text style={stylePrime.splitTitle}>{'2º LUGAR'.toUpperCase()}</Text>
                                </View>
                                <Text style={[stylePrime.splitText, stylePrime.splitTextScore, stylePrime.textGree]}>R$ 1000,00</Text>
                            </View>
                        </View>

                        <Text style={styles.titleSecondary}>Premiação final do vendedor</Text>

                        <View style={stylePrime.box}>
                            <View style={stylePrime.split}>
                                <View style={[stylePrime.splitTitleBox, stylePrime.splitTitleBoxLeft]}>
                                    <Text style={stylePrime.splitTitle}>{'1º LUGAR'.toUpperCase()}</Text>
                                </View>
                                <View style={stylePrime.boxSplitText}>
                                    <Text style={[stylePrime.splitText, stylePrime.textYellow]}>R$ 700,00</Text>
                                </View>
                            </View>
                            <View style={stylePrime.split}>
                                <View style={[stylePrime.splitTitleBox, stylePrime.splitTitleBoxRight, stylePrime.colorGree]}>
                                    <Text style={stylePrime.splitTitle}>{'2º LUGAR'.toUpperCase()}</Text>
                                </View>
                                <Text style={[stylePrime.splitText, stylePrime.splitTextScore, stylePrime.textGree]}>R$ 500,00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        } else {
            return (
                <View>
                    <View style={stylePrime.container}>
                        <Text style={styles.titleSecondary}>Premiação final do vendedor</Text>

                        <View style={stylePrime.box}>
                            <View style={stylePrime.split}>
                                <View style={[stylePrime.splitTitleBox, stylePrime.splitTitleBoxLeft]}>
                                    <Text style={stylePrime.splitTitle}>{'1º LUGAR'.toUpperCase()}</Text>
                                </View>
                                <View style={stylePrime.boxSplitText}>
                                    <Text style={[stylePrime.splitText, stylePrime.textYellow]}>R$ 700,00</Text>
                                </View>
                            </View>
                            <View style={stylePrime.split}>
                                <View style={[stylePrime.splitTitleBox, stylePrime.splitTitleBoxRight, stylePrime.colorGree]}>
                                    <Text style={stylePrime.splitTitle}>{'2º LUGAR'.toUpperCase()}</Text>
                                </View>
                                <Text style={[stylePrime.splitText, stylePrime.splitTextScore, stylePrime.textGree]}>R$ 500,00</Text>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
    }

    render() {
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollview}>
                    <View style={{marginLeft: 13}}>
                        <TitlePrimary textContent={"O QUE É O PROGRAMA"} />
                    </View>

                    <Text style={styles.text}>Olá! Veja nosso vídeo e entenda tudo sobre a campanha de incentivo Quem entende Vende Mauá</Text>

                    <View style = {styles.viewVideo}>
                    
                        <WebView style={styles.boxVideo} scrollEnabled={false} source = {{ uri: 'https://www.youtube-nocookie.com/embed/'+this.state.dataSource.page.url+'?rel=0&amp;showinfo=0' }} />
                    
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

                    <Text style={styles.text}>Nossa premiação é mensal e ganha quem acumular mais pontos! Os funcionários das 4 lojas que mais pontuaram ao final de cada mês serão <Text style={styles.destaqueGreen}>recompensados com dinheiro via Vale Presente.</Text></Text>

                    <Rankingbox />

                    {/* <Text style={styles.titleSecondary}>Premiação final</Text>

                    <Rankingbox /> */} 

                    {this.typeUserSelect()}
                </ScrollView>
            </View>
        );
    }
}