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
        width: ((Dimensions.get('window').width - 20)),
        height: 180,
    }
});

export default styles;
