import { StyleSheet, Platform, Dimensions  } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    content: {
        flex: 3,
        backgroundColor: '#E6F2F0', 
    },
    modalTop: {
        backgroundColor: colors.white,
        paddingBottom: 15, 
    },
    contentModal: {
        flex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        padding: 20,
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
    viewVideo: {
        width: "100%",
        height: ((((Dimensions.get('window').width - 100) / 2) * 2) * 9)/16,
        overflow: 'hidden',
        marginTop: 20,
        marginBottom: 20,
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
        backgroundColor: '#fff',
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
        height: 300,      
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
    }
})

export default styles;