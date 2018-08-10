import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
    },
    scrollview: {
        marginBottom: 70,
    },
    titleSceneTxt: {
        textAlign: 'center',
        color: '#243331',
        fontSize: 14,
        paddingTop: 22,
        paddingBottom: 10,
        fontFamily: fonts.main,
    },
    titleItem: {
        color: colors.primary,
        fontSize: 14,
        fontWeight: 'bold',
        paddingVertical: 15,
        paddingLeft: 25,
    }, 
    desempenho: {
        paddingLeft: 25,
        paddingRight: 25,
        marginBottom: 20,
    },
    listUSer: {
        paddingLeft: 25,
        paddingRight: 25,
    }
});

export default styles;
