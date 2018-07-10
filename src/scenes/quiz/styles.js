import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    content: {
        flex: 3,
        backgroundColor: 'red',
    },
    contentModal: {
        flex: 3,
        backgroundColor: '#00985B', 
        // flex: 1,
        // marginTop: 0,
        justifyContent: 'center',
        padding: 20,
        // marginTop: 30, 
        //height: "100%",   
    },
    clearBtn: {
        position: "absolute",
        right: 15,
        top: 15,    
    },
    titleModulo: {
        alignItems: 'center', 
        width: "100%",
        paddingBottom: 20,
    },
    titleQuiz: {
        color: colors.ultralight,
        fontSize: 12,
    },
    contentQuiz: {     
        alignItems: 'center', 
    },
    content: {
        width: "95%", 
        backgroundColor: colors.white,
        borderRadius: 3,
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
        color: colors.white,
        fontSize: 12,
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
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
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