import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    contentAll: {
        backgroundColor: '#00985B',
        height: "100%",
    },
    clearBtn: {
        position: "absolute",
        top: 15, 
        right: 15,
    },
    titleModulo: { 
        alignItems: "center",
        paddingBottom: 20,
        paddingTop: 20,
    }, 
    titleQuiz: { 
        color: colors.ultralight,
        fontSize: 12, 
    }, 
    contentQuiz: {     
        alignItems: 'center',
    },
    content: {
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: "90%",
        backgroundColor: colors.white,
    },
    btnQuestion: {
        marginBottom: 10,
        padding: 15,
        width: "100%",
        alignItems: 'center', 
        backgroundColor: colors.graylight, 
    },
    titleQuizBox: {
        fontSize: 18,
        color: colors.primary,
        fontWeight: "bold",
        textAlign: "center", 
        paddingTop: 20,
        paddingBottom: 20, 
        paddingLeft: 25,
        paddingRight: 25, 
    },
    contentList: {
        alignItems: 'center', 
        paddingLeft: 15,
        paddingRight: 15,  
    },
    btnQuestion: {
        marginBottom: 10,
        padding: 15,
        width: "100%",
        alignItems: 'center', 
        backgroundColor: colors.graylight, 
    },
    boxBtn: {
        alignItems: 'center', 
    },
    btnQuestionSelect: {
        backgroundColor: "#FFB100",
    }, 
    textQuestionSelect: {
        color: colors.white, 
    },
    btnConfirm: {
        backgroundColor: colors.regular,
        borderRadius: 50,
        marginTop: 15, 
        marginBottom: 25,
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 30, 
        paddingRight: 30, 
    },
    btnConfirmOk: {
        backgroundColor: "#FFB100",    
    },
    textBtn: {
        color: colors.white, 
    },
    contentSlider: {  
        alignItems: 'center', 
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30, 
    },
    boxIcon: {
        paddingLeft: 4,
        paddingRight: 4, 
    },
    iconSlider: { 
        color: colors.white, 
    },
    iconSliderSelect: {
        color: colors.yellow, 
    },
    contentAllStatus: {
        alignItems: "center",
    },
    contentStatu: { 
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStatu: {
        fontFamily: fonts.main,
        fontSize: 13,
        fontWeight: 'bold',
    },
    greenStatus: {
        color: '#14CC82'
    },
    blueStatus: {
        color: '#00A6E3'
    },
    yellowStatus: {
        color: '#FFB100'
    },
    redStatus: {
        color: '#C71829'
    },
    greyStatus: {
        color: '#ADCCC7'
    },
    box: {
        alignItems: "center",
    },
    itemStatu: { 
        alignItems: "center",
        width: '45%',
        justifyContent: 'space-around',
    },
    boxTitleStatu: {
        width: "70%",
        paddingTop: 20,
        paddingBottom: 30,
    },
    titleStatu: {
        fontFamily: fonts.main,
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        color: "#4D6662",
    },
    boxBtnSend: {
        marginTop: 50,
    },
    btnSend: { 
        backgroundColor: '#FFB100',
        borderRadius: 50,
        marginTop: 15, 
        marginBottom: 25,
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 30, 
        paddingRight: 30, 
    },
})

export default styles;