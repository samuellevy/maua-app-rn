import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: '#f7fbfc',
        justifyContent: 'center',
        padding: 18,
    },
    addEmplayee: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    addBtn: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.yellow,
        paddingLeft: 20,
        paddingRight: 30,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 50,
        marginBottom: 20,
    },
    boxIcon: {
        backgroundColor: colors.white,
        borderRadius: 50,
    },
    iconClear: { 
        color: colors.yellow,
    },
    textBtn: {
        fontSize: 12,
        color: colors.white,
        paddingLeft: 10,
    },
});

export default styles;
