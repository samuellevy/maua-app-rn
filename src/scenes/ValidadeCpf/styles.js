import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    teste: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        paddingHorizontal: 20,
        paddingTop: "10%",
    },
    txtTitle: {
        paddingBottom: 15,
        paddingTop: 20,
        fontSize: metrics.fonts.big,
        color: colors.light,
        fontWeight: 'bold',
        fontFamily: fonts.main,
    },
    txtDescription: {
        fontSize: metrics.fonts.medium,
        fontFamily: fonts.main,
    },
    input: {
        marginTop: 15,
    },
    btnValidade: {
        width: '100%',
        backgroundColor: colors.light,
        fontSize: metrics.fonts.medium,
        marginTop: 15,
        paddingVertical: 10,
        borderRadius: 15,
        color: colors.white,
        textAlign: 'center'
    }
});

export default styles;
