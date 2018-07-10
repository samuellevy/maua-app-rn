import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({ 
    contentAlert: {
        flexDirection: 'row',
        backgroundColor: colors.yellow,
        padding: 15,
        paddingLeft: 20,
    },
    boxAlert: {
        flexDirection: 'row',
    },
    boxIcon: {
        borderRadius: 50,
        backgroundColor: colors.white,
        marginRight: 10,
    },
    iconDone: {
        fontSize: 16, 
        color: colors.yellow,
        padding: 1,
    },
    textAlert: {
        color: colors.white,
        fontSize: 12,
    }
});  

export default styles;             
