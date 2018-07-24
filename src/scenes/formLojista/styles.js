import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    },
    modalTop: {
        paddingBottom: 15,
    },
    contentPie: {  
        height: 200, 
        alignItems: 'center', 
    },
    boxTitleTop: { 
        alignItems: 'center', 
    },
    titleTop: {
        paddingTop: 10,
        color: colors.fontColor,
        fontFamily: fonts.main,
        fontSize: 18,
    },
    textBottomPie: {  
        fontFamily: fonts.main,
        color: colors.yellow,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    boxPie: {
        flex: 2,  
        height: 200, 
    },
    textNote: {
        paddingBottom: 15,
        fontSize: 12,  
        fontFamily: fonts.main,
        color: '#4D6662',
    },
    clearBtn: {
        position: 'absolute',
        right: 0,
        top: 5,   
        width: '10%', 
    },
    viewVideo: {
        width: "86%",
        height: 138,
        margin: 20,
    },
    icon: {
        width: '100%',
        textAlign:'center',
        fontSize: 106,
        paddingTop: 7,
        paddingBottom: 10,
    },
    modalBottom: {
        padding: 20, 
        paddingLeft: 30,
        paddingRight: 30,
        // backgroundColor: '#fff',
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        },
    },
    textReg: {
        lineHeight: 20,
    },
    titleDescription: {
        fontFamily: fonts.main,
        fontWeight: 'bold',
        color: "#14CC82",
        fontSize: 14,
        paddingBottom: 10,
    },
    scrollview: {
        // height: 400,
        marginBottom: 50
    },
    description: {
        fontSize: 14,
        fontFamily: fonts.main,
        color: "#7B9995",
        fontWeight: '300',
    },
    contentBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    acessMod: {
        width: 170,
        backgroundColor: '#14CC82',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 30,
    },
    textBtn: {
        color: "#ffffff",
    },
    // input: {
    //     borderRadius: 4,
    //     borderWidth: 0.5,
    //     borderColor: '#d6d7da',
    //     marginBottom: 10,
    // },
    // inputText: {
    //     paddingBottom: 10,
    // },

    
    boxInput: {
        flex: 1,
        flexDirection: 'row', 
        alignItems: 'center',
        borderBottomColor: '#ADCCC7',
        borderBottomWidth: 2,
        paddingTop: 15,
        paddingLeft: 10,
        paddingRight: 10, 
    },
    inputText: {
        width: "20%",
        fontSize: 10,
        color: colors.fontColor,
    }, 
    inputTextGreen: {
        width: "20%",
        fontSize: 10, 
        color: colors.light,
    }, 
    input: {
        width: "80%",
        fontSize: 14,
        color: colors.gray, 
        padding: 20,
    },
})

export default styles;