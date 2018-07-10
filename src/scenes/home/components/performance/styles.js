import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    splitLeft:{
        width: '60%',
    },
    text:{
        fontSize: metrics.fonts.medium,
        paddingBottom: 20,
        color: colors.textColor,
    },
    dateTitle:{
        fontSize: metrics.fonts.medium,
        fontWeight: 'bold',
        color: colors.blue,
        paddingBottom: 5,
    },
    table:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tableTitle:{
        fontSize: metrics.fonts.medium,
        fontWeight: 'bold',
        color: colors.gray,
        paddingBottom: 3,
    },
    tableText:{
        fontSize: metrics.fonts.medium,
        color: colors.black,
        fontStyle: 'italic',
    },
    splitRight: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        position: 'relative',
    }

});

export default styles;
