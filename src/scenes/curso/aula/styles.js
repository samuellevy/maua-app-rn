import { StyleSheet, Platform, Dimensions  } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    cursoInfo: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: metrics.headerPadding,
    },
    boxTitle: {
        paddingBottom: 10,
    },
    boxVideo: {
        width: ((Dimensions.get('window').width - 50) / 3) * 3.15,
        height: 400,
    },
    infoCurse: {
        fontFamily: fonts.main,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FCB415',
    },
    description: {
        fontFamily: fonts.main,
        color: '#7B9995',
        fontWeight: 'normal',
        paddingTop: 5,
        fontSize: 14,
    },
    viewVideo: {
        width: ((Dimensions.get('window').width - 50) / 3) * 3.5,
        height: ((((Dimensions.get('window').width - 50) / 3) * 3.5) * 9)/16,
        overflow: 'hidden',
        marginTop: 20,
        marginBottom: 20,
    },
    boxTest: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    startTest: {
        width: 170,
        backgroundColor: '#ADCCC7',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 30,
    },
    startTestActive: {
        width: 170,
        backgroundColor: '#FCB415',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 7,
        borderRadius: 30,
    },
    textBtn: {
        color: colors.white,
        fontSize: 12,
    },
    containerCurso: {
        marginBottom: 40,
    }
});

export default styles;
