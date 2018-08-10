import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: '100%'
    },

    //---------- style nav -------------------
    navTop: {
        backgroundColor: '#00985B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 0.3,
        borderTopColor: '#ffffff'
    },
    itemTxt: {
        width: '33%',
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#00985B'
    },
    itemTxtActive: {
        borderBottomWidth: 2,
        borderBottomColor: '#FCB415'
    },
    colorTxt: {
        textAlign: 'center',
        color: colors.white,
        fontWeight: 'bold'
    },

    //---------- Filter and update -----------
    allList: {
        padding: 10,
    },
    contentTopList: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    boxList: {
        flex: 1,
        width: '100%',
        marginTop: 20,
        borderRadius: 3,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    boxListTop: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 15,
        paddingBottom: 15,
    },
    textListTop: {
        marginLeft: 5,
        color: '#4D6662',
        fontSize: metrics.fonts.small,
    },
    iconInfoRight: {
        marginLeft: 5,
    },
    inputSelect: {
        flex: 1,
        padding: 20,
        width: 200,
    },
    select: {

    },

    //---------- style list user--------------
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
    nameUser: { 
        width: '65%',
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
        width: '20%',
    },
    position: {
        alignItems: 'center',
        width: '15%',
    },
    iconArrow: {
        color: colors.regular,
    }
});

export default styles;
