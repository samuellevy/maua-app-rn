import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        paddingVertical: 10,
        position: 'relative',
    },
    card:{
        flex: 1,
        flexDirection: 'row',
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
        paddingVertical: 25,
        backgroundColor: colors.white,
    },
    imageContainer:{
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        height: 110,
        width: 110,
        resizeMode: 'contain',
    },
    content: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
    },
    titleBox:{
        backgroundColor: colors.yellow,
        borderRadius: 3,
        padding: 5,
        width: 130,
    },
    title:{
        fontSize: metrics.fonts.medium,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    loja:{
        fontSize: metrics.fonts.xbig,
        lineHeight: metrics.fonts.xbig,
        fontWeight: 'bold',
        color: colors.fontColor,
        paddingVertical: 10,
    },
    score:{
        fontSize: metrics.fonts.big,
        lineHeight: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.yellow,
    }
});

export default styles;
