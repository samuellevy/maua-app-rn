import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    content: {
        flex: 3,
        backgroundColor: 'red',
    },
    contentModal: {
        flex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        // flex: 1,
        // marginTop: 0,
        justifyContent: 'center',
        padding: 20,
        // marginTop: 30, 
        //height: "100%",   
    }, 
    boxTitleTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    titleTop: {
        width: '70%',
        textAlign:'right', 
        paddingTop: 10,
        color: "#fff",
        fontFamily: fonts.main,
        fontSize: 14,
    },
    clearBtn: {
        width: '10%',
        color: "#fff",
        fontSize: 12,
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
        padding: 10,
        backgroundColor: '#fff',        
        borderRadius: 3,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        },
    },
    titleDescription: {
        fontFamily: fonts.main,
        color: "#006644",
        fontSize: 14,
        paddingBottom: 10,
    },
    description: {
        fontSize: 14,
        fontFamily: fonts.main,
        color: "#4D6662",
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