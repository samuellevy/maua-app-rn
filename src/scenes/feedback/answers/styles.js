import { StyleSheet, Platform, Dimensions  } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        marginBottom: 60,
    },
    title: {
        paddingLeft: 15,
        fontFamily: fonts.main,
        color: colors.fontColor,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 5,
        fontSize: 12,
    } ,   
    formAnswers: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    textAnswers: {
        fontSize: 14,
        fontFamily: fonts.main,
        color: '#4D6662',
        paddingBottom: 10,
        paddingTop: 10, 
        fontWeight: 'bold', 
    },
    textAsk: {
        fontFamily: fonts.main,
        color: '#243331',
        fontSize: 12,
        paddingBottom: 5,
        paddingLeft: 5,
        paddingTop: 3, 
    },
    textAskSelect: {
        color: '#14CC82',
        fontWeight: 'bold' 
    },
    answersCorrect: {
        marginTop: 15, 
        marginBottom: 15,
        width: "100%",
        padding: 15,
        borderRadius: 3,
        backgroundColor: colors.yellow,        
    },
    textCorrectAnswers: {
        color: colors.white, 
        fontFamily: fonts.main,
        fontSize: 12, 
    },
    item: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCheck: {
        color: '#243331',
    },
    iconCheckSelect: {
        color: '#14CC82', 
    }
})

export default styles; 