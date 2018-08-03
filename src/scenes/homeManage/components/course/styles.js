import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%'
    },
    viewVideo: {
        width: "100%",
        height: 200,
    },
    description:{
        flex: 1,
        position: 'relative',
        paddingTop: 15,
    },
    title:{
        fontSize: metrics.fonts.small,
        lineHeight: metrics.fonts.small,
        fontWeight: 'bold',
        textAlign: 'left',
        paddingBottom: 10,
    },
    text:{
        fontSize: metrics.fonts.medium,
        lineHeight: metrics.fonts.medium,
        color: colors.fontColor,
        textAlign: 'left',
    },

});

export default styles;
