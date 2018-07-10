import { StyleSheet, Platform, Dimensions  } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    contentDescription: {
        paddingTop: 20,
    },
    title: {
        paddingLeft: 15,
        fontFamily: fonts.main,
        color: colors.fontColor,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingTop: 5,
        fontSize: 12,
    } ,
    descriptionTitle: {
        fontFamily: fonts.main,
        color: colors.yellow,
        fontWeight: 'bold',
        fontSize: 16,
        paddingLeft: 15,
    },
    description: {
        paddingLeft: 15,
        fontFamily: fonts.main,
        color: colors.gray,
        fontSize: 14, 
        paddingTop: 5,
    },
    viewVideo: {
        width: ((Dimensions.get('window').width - 50) / 3) * 3.5,
        height: ((((Dimensions.get('window').width - 50) / 3) * 3.5) * 9)/16,
        paddingLeft: 15, 
        paddingRight: 15,  
        marginBottom: 60,   
        paddingTop: 20,
        overflow: 'hidden'   
    },
    thumbvideo:{   
        width: '100%',
        height: '100%'
    },
    boxSend: {
        alignItems: 'center',  
    },
    askTest: { 
        paddingVertical: 7,
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35,  
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#14CC82',
        alignSelf: 'center',
    },
    btnText: {
        color: '#14CC82',
    }
})

export default styles; 