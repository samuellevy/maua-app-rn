import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: colors.white,
        justifyContent: 'center',
    },
    ruleContent:{
        padding: '5%',
        marginBottom: 50,
    },
    ruleTitle:{
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.primary,
        paddingBottom: 10,
        lineHeight: 18,
    }, 
    ruleParagraph:{
        fontSize: metrics.fonts.medium,
        color: colors.dark,
        marginBottom: 10,
        lineHeight: 20,    
    }
});

export default styles;
