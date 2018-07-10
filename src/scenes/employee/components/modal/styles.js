import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    content: {
        flex: 3,
        backgroundColor: 'red',
    },
    contentModal: {
        flex: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        padding: 30,
    },
    clearBtn: {
        position: "absolute",
        right: 2,
        top: 2,
    },
    wrapper: {
        padding: 20,
        backgroundColor: '#fff',        
        borderRadius: 3,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 2,
            width: 0
        },
    },
    boxBtn: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    btnExit: {
        backgroundColor: colors.white,
        fontSize: 12,
        fontWeight: "bold",
        borderRadius: 3,
        borderColor: colors.error,
        borderWidth: 2,
        width: "45%",
        alignItems: 'center',
        paddingTop: 6,
        paddingBottom: 6,
    }, 
    textBtnExit: {
        color: colors.error,
        fontSize: 12,
    },
    btnConfirm: {
        backgroundColor: colors.light,
        fontSize: 12,
        fontWeight: "bold",
        borderRadius: 3,
        borderColor: colors.light,
        borderWidth: 2,
        width: "45%",
        alignItems: 'center',
        paddingTop: 6,
        paddingBottom: 6,
    },
    textBtnConfirm: {
        color: colors.white,
        fontSize: 12,
    },
    titleModal: {
        fontSize: 14,
        fontWeight: "bold",
        color: colors.textColor,
        paddingBottom: 10,
    },
    textModal: {
        fontSize: 12,
        color: colors.gray,
        paddingBottom: 10,
    }
});  

export default styles;