import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.lightBackground,
        padding: 25,
    },
    title:{
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.primary,
        paddingBottom: 10,
        lineHeight: 18,
    },
    txtDescription:{
        paddingTop: 20,
        fontSize: metrics.fonts.big,
        fontFamily: fonts.main,
        fontWeight: 'normal',
        color: colors.fontColor,
    },

    inputBox: {
        marginVertical: 30,
    },

    placeholder:{
        color: colors.gray,
        fontStyle: 'italic',
    },

    input: {
        height: 200, 
        borderColor: colors.gray, 
        borderWidth: 1,
        borderRadius: 4,
        backgroundColor: colors.white,
        color: colors.fontColor,
        fontSize: metrics.fonts.big,
        padding: 20,
        textAlignVertical: 'top',
    },

    boxSend:{
        flex:1,
        justifyContent: 'flex-end',
        marginBottom: metrics.tabBarHeight,

    }

});

export default styles;
