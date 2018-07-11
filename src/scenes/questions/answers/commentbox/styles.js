import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    answersCorrect: {
        marginTop: 15, 
        marginBottom: 15,
        width: "100%",
        padding: 15,
        borderRadius: 3,
        backgroundColor: colors.yellow,        
    },
    answersWrong:{
        marginTop: 15, 
        marginBottom: 15,
        width: "100%",
        padding: 15,
        borderRadius: 3,
        backgroundColor: colors.gray,
    },
    textComment: {
        color: colors.white, 
        fontFamily: fonts.main,
        fontSize: 12, 
    },
});

export default styles;
