import React from 'react';
import { FlatList, ActivityIndicator, Text, View, TouchableOpacity  } from 'react-native';
import Question from './components/question';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rest from '../../services/rest';
import Finish from './components/finish';
import Result from './components/result';

export default class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            questionKey:0,
            dataSource: [],
            dataAnswers: [],
            selectedAnswer: null,
            toFinish: false,
        }
    }

    static navigationOptions = {
        header: null
    };
    
    componentDidMount(){
        rest.get('/questions/get/2').then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest.questions
            });
        })
    }

    selectAnswer(key){
        this.setState({
            selectedAnswer: key,
        });
    }

    confirmAnswer(){
        if(this.state.questionKey + 1 < this.state.dataSource.length && !this.state.toFinish){
            var answers = this.state.dataAnswers.concat({id: this.state.questionKey, value: this.state.selectedAnswer});
            this.setState({dataAnswers: answers});
            questionKey = this.state.questionKey + 1;
            this.setState({
                questionKey: questionKey,
                selectedAnswer: null,
            });
        }
        else if(this.state.questionKey + 1 == this.state.dataSource.length && !this.state.toFinish){
            var answers = this.state.dataAnswers.concat({id: this.state.questionKey, value: this.state.selectedAnswer});
            this.setState({dataAnswers: answers, toFinish: true});
            alert(this.state.dataAnswers.length);
        }else{
            alert('chegou aqui, parceiro');
            return <Finish navigator={() => {}} />
        }
        console.log(this.state.dataAnswers);
    }

    render(){
        const { goBack } = this.props.navigation;
        if(this.state.isLoading){
            return(
                <View style={{flex: 1, padding: 20, alignItems: 'center'}}>
                    <ActivityIndicator/>
                </View>
            )
        }
        if (this.state.toFinish){
            return(
                <Result/>
            )
        }
        else{
            return(
                <View style={styles.contentAll}> 
                    <View style={styles.contentModal}>
                        <TouchableOpacity style={styles.clearBtn} onPress={() => {goBack()}}>
                            <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                        </TouchableOpacity>
                        <View style={styles.titleModulo}>
                            <Text style={styles.titleQuiz}>MÓDULO 03: CIMENTO CPII</Text>
                        </View>

                        <View style={styles.contentQuiz}>
                            <View style={styles.content}> 
                                <Text style={styles.titleQuizBox}>{this.state.questionKey+1 +' - '+ this.state.dataSource[this.state.questionKey].title}</Text>
                                <View style={{width: '100%'}}>
                                {this.state.dataSource[this.state.questionKey].options.map((item, key) => (
                                    <View style={{alignItems: 'center', paddingLeft: 15, paddingRight: 15}} key={'answer_'+key}>
                                        <TouchableOpacity style={[styles.btnQuestion, this.state.selectedAnswer==key?styles.selectedAnswer:'']} onPress={()=>{this.selectAnswer(key)}}>
                                            <Text style={[styles.textQuestion, this.state.selectedAnswer==key?styles.textAnswerSelected:'']}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View> 
                                ))}
                                </View>
                                <View style={styles.boxBtn}>
                                    <TouchableOpacity style={[styles.btnConfirm]} onPress={() => {this.confirmAnswer()}}>
                                        <Text style={styles.textBtn}>CONFIRMAR RESPOSTA</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            );
        }
    }
}