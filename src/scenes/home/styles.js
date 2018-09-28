import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

let widthScreen = Dimensions.get('window').width;

function imageSize(widthScreen) {
    if(widthScreen >= 340) {
        console.log('340')
        return 180;
    }
    if(widthScreen <= 341) {
        console.log('360')
        return 480;
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#f7fbfc',
    },
    scrollview:{
        marginBottom: 55,
    },
    contentImage: {
        alignItems: 'center',
        marginTop: 10,
    },
    image: {
        width: "95%",
        // height: Dimensions.get('window').width,
        // height: imageSize(widthScreen),
        
    },
    inputIconRight:{
        position: 'absolute',
        right: 0, 
        color: colors.light,
        marginTop: 10,
    },
    cpf_teste: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cpf_body: {
        paddingHorizontal: 20,
        paddingTop: "10%",
    },
    cpf_txtTitle: {
        paddingBottom: 15,
        paddingTop: 20,
        fontSize: metrics.fonts.big,
        color: colors.light,
        fontWeight: 'bold',
        fontFamily: fonts.main,
    },
    cpf_txtDescription: {
        fontSize: metrics.fonts.medium,
        fontFamily: fonts.main,
    },
    cpf_input: {
        marginTop: 15,
    },
    cpf_btnValidade: {
        width: '100%',
        backgroundColor: colors.light,
        fontSize: metrics.fonts.medium,
        marginTop: 15,
        paddingVertical: 10,
        borderRadius: 15,
        color: colors.white,
        textAlign: 'center'
    }
});

export default styles;
