import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f7fbfc',
        justifyContent: 'center',
    },
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
    boxBtn: {
        alignItems: 'center',
        marginBottom: 50,
    },
    btnSalve: {
        // width: 216,   
        justifyContent: 'center',
        backgroundColor: colors.yellow,
        borderRadius: 50,
        marginTop: 40,
    },
    textBtn: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
        color: colors.white,
    },
    btnVisible: {
        position: "absolute",
        right: 0,
        top: 34,
    }
});

export default styles;
