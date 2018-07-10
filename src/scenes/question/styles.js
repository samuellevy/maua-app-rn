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
})

export default styles;