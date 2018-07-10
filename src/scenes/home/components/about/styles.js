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
    },
    text:{
        fontSize: metrics.fonts.medium,
        lineHeight: 20,
        color: colors.fontColor,
        textAlign: 'left',
        paddingBottom: 20,
    },

});

export default styles;
