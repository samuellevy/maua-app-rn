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
});

export default styles;
