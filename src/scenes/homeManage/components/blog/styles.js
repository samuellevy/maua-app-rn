import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%'
    },
    description:{
        flex: 1,
        position: 'relative',
    },
    title:{
        fontSize: metrics.fonts.big,
        lineHeight: 20,
        color: colors.black,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingBottom: 10,
    },
    text:{
        fontSize: metrics.fonts.small,
        lineHeight: 16,
        color: colors.fontColor,
        textAlign: 'left',
        paddingBottom: 10,
    },
    image: {
        height: 200,
        width: null,
        resizeMode: 'contain'
    }

});

export default styles;
