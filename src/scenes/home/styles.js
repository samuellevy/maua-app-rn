import { StyleSheet, Platform, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

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
        // width: ((Dimensions.get('window').width - 20)),
        // height: Dimensions.get('window').width,
        
    },
    inputIconRight:{
        position: 'absolute',
        right: 0, 
        color: colors.light,
        marginTop: 10,
    },
});

export default styles;
