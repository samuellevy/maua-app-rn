import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // padding: metrics.containerPadding,
        backgroundColor: '#f7fbfc',
        justifyContent: 'center',
    },
    scrollview:{
        marginTop: 15, 
        marginBottom: 55,
    },
    viewVideo: {
        width: ((Dimensions.get('window').width - 50) / 3) * 3.5,
        height: ((((Dimensions.get('window').width - 50) / 3) * 3.5) * 9)/16,
        paddingLeft: 15, 
        paddingRight: 15, 
        paddingBottom: 20, 
        overflow: 'hidden' 
    },
    thumbvideo:{
        width: '97%',
        height: '100%'
    },
    text: {
        fontSize: 14,
        color: colors.textColor,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20,
    },
    titleSecondary: {
        fontSize: 14,
        color: colors.primary,
        paddingLeft: 15,
        paddingBottom: 10, 
        fontWeight: "bold",
    },
    negrito: {
        color: colors.black,
        fontWeight: "bold",
    },
    boxTable: {
        alignItems: 'center', 
    },
    boxContent: {
        width: "91%",
        backgroundColor: colors.white,
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        marginBottom: 20,
    },
    infoBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14,  
        borderBottomWidth: 0.5,
        borderTopColor: "#E6F2F0",
    },
    textTable: {
        fontSize: 12,
        color: colors.textColor,
    },
    textScore: {
        fontSize: 13,
        color: colors.primary,
    },
    destaqueText: {
        fontSize: 13,
        color: colors.primary,
        fontWeight: "bold",  
    },
    boxResult: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 14, 
        backgroundColor: colors.yellow, 
        alignItems: 'center',
    },
    textBold: {
        fontSize: 10,
        fontWeight: "bold",
        color: colors.white,  
    },
    textResult: {
        fontSize: 12,        
        color: colors.white,  
    }
}); 

export default styles;
