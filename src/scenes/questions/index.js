import React from 'react';
import { FlatList, Text, View, TouchableOpacity  } from 'react-native';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rest from '../../services/rest';
import Result from './components/result';
import Loading from '../../components/loading';

export default class Questions extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            questionKey:0,
            dataSource: [],
            dataAnswers: [],
            parcials: 0,
            selectedAnswer: null,
            toFinish: false,
            percent: 0,
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
        parcials = this.state.parcials;
        if(this.state.questionKey + 1 < this.state.dataSource.length && !this.state.toFinish){
            // defining answers
            var answers = this.state.dataAnswers.concat({id: this.state.questionKey, question_id: this.state.dataSource[this.state.questionKey].id,  value: this.state.selectedAnswer, correct: this.state.dataSource[this.state.questionKey].value});
            this.setState({dataAnswers: answers});
            if(this.state.selectedAnswer == this.state.dataSource[this.state.questionKey].value){
                parcials++;
                console.log(parcials);
                this.setState({parcials: parcials});
                this.setState({percent: (parcials*100)/this.state.dataSource.length});
            }
            // cleaning
            questionKey = this.state.questionKey + 1;
            this.setState({
                questionKey: questionKey,
                selectedAnswer: null,
            });
        }
        else if(this.state.questionKey + 1 == this.state.dataSource.length && !this.state.toFinish){
            var answers = this.state.dataAnswers.concat({id: this.state.questionKey, question_id: this.state.dataSource[this.state.questionKey].id,  value: this.state.selectedAnswer, correct: this.state.dataSource[this.state.questionKey].value});
            if(this.state.selectedAnswer == this.state.dataSource[this.state.questionKey].value){
                parcials++;
                console.log(parcials);
                this.setState({parcials: parcials});
                this.setState({percent: (parcials*100)/this.state.dataSource.length});
            }
            this.setState({dataAnswers: answers, toFinish: true});
        }else{  

        }
    }

    render(){
        let percent = this.state.percent;
        console.log(percent);
        const { goBack } = this.props.navigation;
        if(this.state.isLoading){
            return(
                <Loading/>
            )
        }
        if (this.state.toFinish){ 
            return(
                <View style={styles.contentAll}> 
                    <View style={styles.contentModal}>
                        <TouchableOpacity style={styles.clearBtn} onPress={() => {goBack()}}>
                            <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                        </TouchableOpacity>
                        <View style={styles.titleModulo}>
                            <Text style={styles.titleQuiz}>MÓDULO 03: CIMENTO CPII</Text>
                        </View>
                    </View>
                    <Result percent={this.state.percent} navigation={this.props.navigation} dataSource={this.state.dataSource} dataAnswers={this.state.dataAnswers}/>
                </View>
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