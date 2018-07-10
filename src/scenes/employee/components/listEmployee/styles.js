import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#ADCCC7',
        borderBottomWidth: 2,
        paddingBottom: 10,
        marginBottom: 10,
    },
    boxName: {
        flex: 1, 
        flexDirection: 'row',
        alignItems: 'center', 
    },
    nameUser: {
        fontSize: 14,
        color: colors.fontColor,
    },
    iconAlert: {
        color: "#FF2409",
        marginTop: 3,
        paddingLeft: 15,
    },
    iconDone: {
        color: "green",
        marginTop: 3,
        paddingLeft: 15,
    },
    textInfo: {
        paddingTop: 10,
        fontSize: 11,
        color: colors.textColor,
    },
    iconEdit: {
        color: colors.greenlight,
    }
});  

export default styles;
