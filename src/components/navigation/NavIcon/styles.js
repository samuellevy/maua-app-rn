import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    tabBtn:{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 4,
    },
    title:{
        fontSize: 11,
        fontFamily: fonts.main,
        color: '#7B9995',
        fontWeight: 'normal',
    },
    icon:{
        alignSelf: 'center',
        color: '#7B9995',
    }
});

export default styles;
