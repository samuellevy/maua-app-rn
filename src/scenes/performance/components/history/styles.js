import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        padding: 20,
        flexDirection: 'row',
    },
    dateCell:{
        width: 70,
    },
    date: {
        fontSize: metrics.fonts.medium,
        color: colors.textColor,
    },
    introCell:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },  
    description: {
        fontSize: metrics.fonts.medium,
        color: colors.textColor,
        fontStyle: 'italic',
    },
    score: {
        fontSize: metrics.fonts.big,
        color: colors.blue,
    },
    bold: {
        fontWeight: 'bold',
    },
    borderOn:{
        borderBottomWidth: 1, 
        borderBottomColor: colors.regular,
    }
});

export default styles;
