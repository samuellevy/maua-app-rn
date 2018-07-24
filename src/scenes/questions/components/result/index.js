import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import rest from '../../../../services/rest';
import Answers from '../../answers';

export default class Result extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        scene: 'finishCourse',
        statusSend: '',
        statusOption: '',
        statusClick: false,
    }

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            scene: 'result'
        }
    }

    sendFeedback(dataSource){
        this.setState({
            scene: 'finishCourse'
        });
        console.log('Result');
        console.log(this.state.statusOption);

        let feedback = JSON.stringify({
            question_id: dataSource[0].id,
            rating: this.state.statusOption
        });
    
        rest.post('/public/sendfeedback', feedback).then((rest)=>{
            console.log(rest);
        });
    }

    sendData(dataAnswers){
        let answers = JSON.stringify({
            answers: dataAnswers
        });
        
        console.log('sending');
        console.log(answers);
        rest.post('/questions/answer', answers).then((rest)=>{
            console.log(rest);
        });

        this.setState({
            scene: 'result'
        });
    }

    confirm(dataAnswers){
        this.sendData(dataAnswers);
        this.setState({
            scene: 'statusSend'
        });
    }

    openAnswers(navigation, dataSource, dataAnswers){
        // navigation.navigate('Answers', {dataSource: dataSource, dataAnswers: dataAnswers});
        this.setState({
            scene: 'answers'
        });
    }
    
    render() {
        let percent = this.props.percent;
        let navigation = this.props.navigation;
        let dataSource = this.props.dataSource;
        let dataAnswers = this.props.dataAnswers;

        console.log('dataAnswers');
        console.log(percent);

        switch(this.state.scene){
            case 'loading':
            break;
            case 'result':
                return (
                    <View style={styles.card}>
                        <View style={styles.imageBox}>
                            <Image style={styles.image} source={require('../../../../../assets/img/resultBanner.png')}/>
                        </View>
                        <View style={styles.congratBox}> 
                            <Text style={styles.congratText}><Text style={{ fontWeight: "bold" }}>Parabéns!</Text></Text>
                            <Text style={styles.congratText}>Você acertou <Text style={{ fontWeight: "bold" }}>{percent}%</Text> do teste!</Text>
                        </View>
                        <View style={styles.contentBox}>
                            <Text style={styles.cardTitle}>Chame todo mundo!</Text>
                            <Text style={styles.cardText}>Uma maneira de acumular pontos é com todos os funcionários completando o módulo do mês. Não dê bobeira e incentive seus colegas!</Text>
                            <TouchableOpacity onPress={() => {this.confirm(dataAnswers)}}>
                                <View style={styles.button}>
                                    <Text style={styles.buttonText}>{"Continuar".toUpperCase()}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
        
                    </View>
                );
            break;
            case 'statusSend':
                return(
                    <View style={styles.contentQuiz}>
                        <View style={styles.content}> 
 
                            <View style={styles.boxTitleStatu}>
                                <Text style={styles.titleStatu}>O que você achou do conteúdo desse módulo?</Text>
                            </View>

                            <View style={styles.contentAllStatus}>
                                <View style={styles.contentStatu}>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'greenStatus', statusClick: true, statusOption: 3})}}>
                                            <MaterialIcon name="sentiment-very-satisfied" size={65} style={[styles.greenStatus, (this.state.statusClick)?(this.state.statusSend == 'greenStatus')?styles.greenStatus:styles.greyStatus:'']}></MaterialIcon> 
                                            <Text style={[styles.textStatu, styles.greenStatus,  (this.state.statusClick)?(this.state.statusSend == 'greenStatus')?styles.greenStatus:styles.greyStatus:'']}>Ótimo</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'blueStatus', statusClick: true, statusOption: 2})}}>
                                            <MaterialIcon name="sentiment-satisfied" size={65} style={[styles.blueStatus, (this.state.statusClick)?(this.state.statusSend == 'blueStatus')?styles.blueStatus:styles.greyStatus:'']}></MaterialIcon>
                                            <Text style={[styles.textStatu, styles.blueStatus,  (this.state.statusClick)?(this.state.statusSend == 'blueStatus')?styles.blueStatus:styles.greyStatus:'']}>Bom</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.contentStatu}>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'yellowStatus', statusClick: true, statusOption: 1})}}>
                                            <MaterialIcon name="sentiment-dissatisfied" size={65} style={[styles.yellowStatus, (this.state.statusClick)?(this.state.statusSend == 'yellowStatus')?styles.yellowStatus:styles.greyStatus:'']}></MaterialIcon>
                                            <Text style={[styles.textStatu, styles.yellowStatus, (this.state.statusClick)?(this.state.statusSend == 'yellowStatus')?styles.yellowStatus:styles.greyStatus:'']}>Ruim</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.itemStatu}>
                                        <TouchableOpacity style={styles.box} onPress={() => {this.setState({statusSend: 'redStatus', statusClick: true, statusOption: 0})}}>
                                            <MaterialIcon name="sentiment-very-dissatisfied" size={65} style={[styles.redStatus, (this.state.statusClick)?(this.state.statusSend == 'redStatus')?styles.redStatus:styles.greyStatus:'']}></MaterialIcon>
                                            <Text style={[styles.textStatu, styles.redStatus, (this.state.statusClick)?(this.state.statusSend == 'redStatus')?styles.redStatus:styles.greyStatus:'']}>Muito ruim</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.boxBtnSend}>
                                <TouchableOpacity style={[styles.btnSend]} onPress={() => {this.sendFeedback(dataSource)}}>
                                    <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>        
                )
            break;
            case 'finishCourse':
                return (
                    <View style={styles.contentQuiz}>
                        <View style={styles.content}> 

                            <View style={styles.contentTop}>
                                <MaterialIcon name="check-circle" size={65} style={[styles.iconGreat]}></MaterialIcon> 
                                <Text style={styles.titleStatuFinish}>Avaliação enviada!</Text>
                            </View>

                            <View style={styles.contentFinish}>
                                <Text style={styles.textTopFinish}>A sua opinião vale muito para nós criarmos um conteúdo melhor pra você!</Text>
                            </View>

                            <View style={styles.boxBtnSend}>
                                <TouchableOpacity style={[styles.btnResposta]} onPress={() => {this.openAnswers(navigation, dataSource, dataAnswers)}}>
                                    <Text style={styles.textBtn}>QUIZ COM RESPOSTAS</Text>
                                </TouchableOpacity>

                                {/* <TouchableOpacity style={[styles.btnSair]}>
                                    <Text style={[styles.btnColotGreen]}>SAIR</Text>
                                </TouchableOpacity> */}
                            </View>
                        </View>
                    </View>
                )
            break;
            case 'answers':
                return(
                    <View style={styles.contentQuiz}>
                        <View style={styles.content}>
                            <Answers navigation={navigation} dataSource={dataSource} dataAnswers={dataAnswers}/>
                        </View>
                    </View>
                )
            break;
        }







        
    }
}
