import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    card:{
        margin: metrics.paddings.dynamicDefault,
        backgroundColor: colors.white,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image:{
        width: '100%',
    },
    congratBox:{
        backgroundColor: colors.yellow,
        marginHorizontal: 12,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        top: -30,
        borderRadius: 3,
    },
    congratText:{
        color: colors.white,
        fontSize: metrics.fonts.medium,
        padding: 2,
    },
    contentBox:{
        marginVertical: 15,
        paddingHorizontal: 35,
    },
    cardTitle:{
        fontWeight: 'bold',
        color: colors.light,
        paddingBottom: 2,
    },
    cardText:{
        color: colors.fontColor,
    },
    button:{
        backgroundColor: colors.yellow,
        width: 185,
        height: 35,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 10,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: metrics.fonts.small,
        color: colors.white,
    }

})

export default styles;