import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        position: 'absolute',
        paddingVertical: 10,
        paddingHorizontal: 20,
        top: 0,
    },
    turnBack: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        alignSelf: 'flex-start',
    },
    iconBack: {
        paddingRight: 10,
        color: colors.light,
    },
    txtBack: {
        color: colors.primary,
    },
    
    content: {
        flex: 1,
        justifyContent: 'center',
        padding: metrics.containerPadding,
        paddingTop: metrics.headerPadding,
    },
    boxWelcome:{
        marginVertical: metrics.marginDefault,
        marginHorizontal: 30,
        paddingTop: 50,
    },
    turnBack:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
    },
    iconBack:{
        paddingRight: 10,
        color: colors.primary,
    },
    txtBack:{
        color: colors.primary,
    },

    txtWelcome:{
        fontSize: metrics.fonts.xxbig,
        fontWeight: 'bold',
        fontFamily: fonts.main,
        color: colors.primary,
        alignSelf: 'center',
    },

    txtInitial:{
        paddingVertical: metrics.padding,
        fontSize: metrics.fonts.medium,
        color: colors.gray,
        fontFamily: fonts.main,
        fontWeight: 'normal',
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: metrics.marginDefault
    },
    
    boxLogin:{
        marginVertical: metrics.marginDefault,
        paddingHorizontal: metrics.marginDefault,
    },


    inputBox:{
        marginBottom: metrics.padding,
        paddingBottom: metrics.marginDefault * 2,
    },

    txtError:{
        fontFamily: fonts.main,
        fontWeight: 'normal',
        marginTop: 5,
        textAlign: 'right',
        color: colors.error,

    },
    
    inputIcon:{
        position: 'absolute',
        color: colors.light,
        marginTop: 10,
    },

    inputIconError:{
        color: colors.error,
    },

    input:{
        height: 40, 
        borderColor: colors.lighter, 
        borderBottomWidth: 1,
        backgroundColor: colors.transparent,
        fontSize: metrics.fonts.big,
        color: colors.fontColor,
        paddingLeft: 40,
    },
    inputError:{
        borderColor: colors.error,
        borderBottomWidth: 1,
    },

    boxCheck:{
        flexDirection: 'row'
    },

    checkIcon:{
        marginRight: 15,
        color: colors.regular,
    },

    txtKeep:{
        paddingTop: 5,
        color: colors.regular,
    },

    boxButton:{
        marginTop: 10,
        paddingVertical: 20,
        backgroundColor: colors.regular,
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
    },
    txtSign:{
        color: colors.white,
        fontFamily: fonts.main,
        fontWeight: 'normal',
    },
    txtForgot:{
        color: colors.regular,
        textAlign: 'center',
        margin: 35
    },

});

export default styles;
