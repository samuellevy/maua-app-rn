import React from 'react';
import { FlatList, Text, View, TouchableOpacity, ScrollView, Modal, Image  } from 'react-native';
import styles from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rest from '../../services/rest';
import Result from './components/result';
import Loading from '../../components/loading';
import ParcialResult from './components/parcialresult';
import styles_modal from './components/parcialresult/styles';

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
            visibleModal: false
        }
    }

    static navigationOptions = {
        header: null
    };
    
    componentDidMount(){
        const {params} = this.props.navigation.state;

        rest.get('/questions/get/'+params.item).then((rest)=>{
            this.setState({
                isLoading: false,
                dataSource: rest.questions,
                course: rest.course
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
        this.setState({visibleModal: true});
        if(this.state.questionKey + 1 < this.state.dataSource.length && !this.state.toFinish){
            // defining answers
            var answers = this.state.dataAnswers.concat({id: this.state.questionKey, question_id: this.state.dataSource[this.state.questionKey].id,  value: this.state.selectedAnswer, correct: this.state.dataSource[this.state.questionKey].value});
            this.setState({dataAnswers: answers});
            if(this.state.selectedAnswer == this.state.dataSource[this.state.questionKey].value){
                parcials++;
                this.setState({parcials: parcials});
                this.setState({percent: (parcials*100)/this.state.dataSource.length});
                this.setState({answer: true});
            }else{
                this.setState({answer: false});
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
                this.setState({parcials: parcials});
                this.setState({percent: (parcials*100)/this.state.dataSource.length});
                this.setState({answer: true});
            }else{
                this.setState({answer: false});
            }
            this.setState({dataAnswers: answers, toFinish: true});
        }else{  

        }
    }

    closeModal(){
        this.setState({
            visibleModal: false
        });
    }

    renderTitle(){
        return this.state.answer?'Parabéns':'A resposta correta é ' + this.state.dataSource[this.state.questionKey - 1].options[this.state.dataSource[this.state.questionKey - 1].value].title
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
                        <TouchableOpacity style={styles.clearBtn} onPress={() => {this.props.navigation.navigate('Curso', {update: true}); }}>
                            <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                        </TouchableOpacity>
                        <View style={styles.titleModulo}>
                            <Text style={styles.titleQuiz}>{this.state.course.title + ': ' + this.state.course.subtitle}</Text>
                        </View>
                    </View>
                    <Result percent={this.state.percent} navigation={this.props.navigation} dataSource={this.state.dataSource} dataAnswers={this.state.dataAnswers}/>
                </View>
            )
        }
        else{
            return(
                <View style={styles.contentAll}> 
                    {/* <ParcialResult action={this.handler} /> */}
                    <Modal animationType="fade" transparent={true} visible={this.state.visibleModal} onRequestClose={() => { this.visibleModal(false); } }> 
                        <View style={styles_modal.contentModal}>
                            <View style={styles_modal.modalTop}>
                                <View style={styles_modal.boxTitleTop}>
                                    {this.state.answer?<Image style={styles_modal.image} source={require('../../../assets/img/correct.png')}/>:<Image style={styles_modal.image} source={require('../../../assets/img/incorrect.png')}/>}
                                </View>
                            </View>
                            
                            <View style={styles_modal.modalBottom}>
                                    <Text style={styles_modal.title_answer}>
                                        {
                                            this.state.visibleModal &&
                                            this.renderTitle()
                                        }
                                    </Text>
                                    <Text style={styles_modal.explanation_answer}>
                                        {
                                            this.state.visibleModal &&
                                            this.state.dataSource[this.state.questionKey - 1].explanation
                                        }
                                    </Text>
                                <View style={styles_modal.contentBtn}>
                                    <TouchableOpacity style={styles_modal.acessMod} onPress={()=>{this.closeModal()}}>
                                        <Text style={styles_modal.textBtn}>CONTINUAR</Text> 
                                    </TouchableOpacity> 
                                </View>
                            </View> 
                        </View>
                    </Modal>
                    <View style={styles.contentModal}>
                        <TouchableOpacity style={styles.clearBtn} onPress={() => {this.props.navigation.navigate('Curso', {update: true}); }}>
                            <MaterialIcon name="clear" size={25} style={styles.iconClear}></MaterialIcon>
                        </TouchableOpacity>
                        <View style={styles.titleModulo}>
                            <Text style={styles.titleQuiz}>{this.state.course.title + ': ' + this.state.course.subtitle}</Text>
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