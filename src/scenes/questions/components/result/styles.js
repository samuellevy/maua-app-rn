import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    card:{
        margin: metrics.paddings.dynamicDefault,
        backgroundColor: colors.white,
        borderRadius: 4,
        overflow: 'hidden',
    },
    image:{
        // tela - margens * altura da imagem original / largura da imagem original
        width: (Dimensions.get('screen').width - (metrics.paddings.dynamicDefault*2)),
        height: ((Dimensions.get('screen').width - (metrics.paddings.dynamicDefault*2))*190)/328
    },
    congratBox:{
        backgroundColor: colors.yellow,
        marginHorizontal: 12,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        top: -30,
        borderRadius: 3,
    },
    congratBoxGray:{
        backgroundColor: colors.gray,
        marginHorizontal: 12,
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        top: -30,
        borderRadius: 3,
    },
    congratText:{
        color: colors.white,
        fontSize: metrics.fonts.medium,
        padding: 2,
    },
    contentBox:{
        marginVertical: 15,
        paddingHorizontal: 35,
    },
    cardTitle:{
        fontWeight: 'bold',
        color: colors.light,
        paddingBottom: 2,
    },
    cardText:{
        color: colors.fontColor,
    },
    button:{
        backgroundColor: colors.yellow,
        width: 185,
        height: 35,
        borderRadius: 30,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 10,
    },
    buttonText:{
        textAlign: 'center',
        fontSize: metrics.fonts.small,
        color: colors.white,
    },
    textBtn: {
        color: colors.white, 
    },
    contentQuiz: {     
        alignItems: 'center',
    },
    content: {
        alignItems: 'center', 
        justifyContent: 'space-between',
        width: "90%",
        backgroundColor: colors.white,
    },
    contentTop: {
        width: "100%",
        backgroundColor: colors.yellow,
        paddingTop: 40,
        paddingBottom: 30,
    },
    iconGreat: {
        textAlign: "center",
        color: colors.white,
        paddingBottom: 10,
    },
    titleStatuFinish: {
        fontFamily: fonts.main,
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        color: colors.white,
    },
    textTopFinish: {
        color: colors.gray,
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
    },
    btnResposta: { 
        backgroundColor: '#FFB100',
        borderRadius: 50,
        marginTop: 10, 
        marginBottom: 20, 
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 30, 
        paddingRight: 30, 
    },
    btnSair: { 
        backgroundColor: 'transparent',
        borderRadius: 50,
        marginTop: 15, 
        marginBottom: 25,
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 30, 
        paddingRight: 30, 
        borderWidth: 0.8,
        borderColor: colors.light,
    },
    btnColotGreen: {
        textAlign: 'center',
        color: colors.light,
    },
    boxBtnSend: {
        
    },

    contentAllStatus: {
        alignItems: "center",
    },
    contentStatu: { 
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStatu: {
        fontFamily: fonts.main,
        fontSize: 13,
        fontWeight: 'bold',
    },
    greenStatus: {
        color: '#14CC82'
    },
    blueStatus: {
        color: '#00A6E3'
    },
    yellowStatus: {
        color: '#FFB100'
    },
    redStatus: {
        color: '#C71829'
    },
    greyStatus: {
        color: '#ADCCC7'
    },
    box: {
        alignItems: "center",
    },
    itemStatu: { 
        alignItems: "center",
        width: '45%',
        justifyContent: 'space-around',
    },
    boxTitleStatu: {
        width: "70%",
        paddingTop: 20,
        paddingBottom: 30,
    },
    titleStatu: {
        fontFamily: fonts.main,
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold',
        color: "#4D6662",
    },
    boxBtnSend: {
        marginTop: 50,
    },
    btnSend: { 
        backgroundColor: '#FFB100',
        borderRadius: 50,
        marginTop: 15, 
        marginBottom: 25,
        paddingTop: 10, 
        paddingBottom: 10, 
        paddingLeft: 30, 
        paddingRight: 30, 
    },

})

export default styles;