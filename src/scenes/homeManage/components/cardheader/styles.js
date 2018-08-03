import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    box:{
        position: 'absolute',
        top: 0,
        width: '100%',
        elevation: 3,
        zIndex: 3,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle:{
        elevation: 3,
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
        backgroundColor: colors.blue,
        justifyContent: 'center'
    },
    title: {
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.blue,
        marginTop: 5,
    },
    icon:{
        alignSelf: 'center',
    }
});

export default styles;
