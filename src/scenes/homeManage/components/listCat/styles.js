import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    boxTop: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle:{
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        height: 45,
        width: 45,
        borderRadius: 32,
    },
    titleTop: {
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.white,
        marginTop: 5,
        paddingBottom: 10,
    },

    viewBox: {
        width: "100%",
        // height: 200,
    },
    description:{
        flex: 1,
        position: 'relative',
    },
    text:{
        fontSize: metrics.fonts.medium,
        lineHeight: 20,
        color: colors.fontColor,
        textAlign: 'left',
        paddingBottom: 20,
    },
    viewBox: {
        paddingLeft: 15,
        paddingRight: 15,
    },
    items: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: colors.graylight,
        borderBottomWidth: 1,
        paddingBottom: 15,
        paddingTop: 15,
    },
    textPosition: {
        color: colors.light,
        fontSize: metrics.fonts.medium,
        fontFamily: fonts.main,
        fontWeight: 'bold',
    },
    textItem: {
        color: colors.fontColor,
        fontSize: metrics.fonts.medium,
        fontFamily: fonts.main,
    },
    alertRed: {
        color: 'red',
        fontWeight: 'bold',
    },
    iconAlert: {
        paddingTop: 4,
        fontSize: metrics.fonts.small,
    },
    ponts: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    position: {
        alignItems: 'center',
    },
    iconArrow: {
        color: colors.regular,
    }
});

export default styles;
