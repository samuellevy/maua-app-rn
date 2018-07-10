import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollview: {
        marginBottom: 55,
    },
    title: {
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.primary,
        margin: 20,
        marginBottom: 0,
        lineHeight: 18,
    },
    
    subtitle: {
        fontSize: metrics.fonts.big,
        color: colors.fontColor,
        fontWeight: 'bold',
        margin: 20,
        marginBottom: 5,
        marginTop: 30,
    },
});

export default styles;
