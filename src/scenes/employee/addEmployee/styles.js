import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    containerAdd:{
        flex: 1,
        // padding: metrics.containerPadding,
        // paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        backgroundColor: '#f7fbfc',  
    },
    contentAddUser: {
        marginTop: 35,
    },   
    boxInput: {
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#ADCCC7',
        borderBottomWidth: 2,
    },
    inputText: {
        width: "20%",
        color: colors.light,
        fontSize: 10,
    },
    input: {
        width: '80%',
        padding: 20,
        borderColor: colors.lighter, 
        borderBottomWidth: 0,
        fontSize: 14,
    },
    addEmplayee: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 10,
        paddingTop: 50,
    },

    //Add Button
    addBtn: { 
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.yellow,
        borderRadius: 50,
        marginBottom: 15,
        minWidth: 200,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 40,
        paddingRight: 40,
    }, 
    boxIcon: {
        backgroundColor: colors.white,
        borderRadius: 50, 
        marginLeft: 5,
        width: 15,
    },
    iconAdd: {  
        color: colors.yellow,
    },
    //Finish Add Button

    //Delete Button
    deleteBtn: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.yellow,
        borderRadius: 50,
        marginBottom: 15,
        minWidth: 200,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 47,
        paddingRight: 47,
    },  
    iconDelete: { 
        color: colors.white,
        marginRight: 15,
    },    
    //Finish Delete Button

    //Delete Button transparent
    deleteBtnTransparent: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 50,
        marginBottom: 40,
        minWidth: 200,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 47, 
        paddingRight: 47,
        borderWidth: 1,
        borderColor: '#00CE7C',
    },  
    iconDeleteTransparent: { 
        color: "#00CE7C",
        marginRight: 15,
    },   
    textBtnTransparent: {
        fontSize: 12,
        color: "#00CE7C",
        paddingLeft: 10,
    }, 
    //Finish Delete Button transparent

    //Text button
    textBtn: {
        fontSize: 12,
        color: colors.white,
        paddingLeft: 10,
    },
});

export default styles;
