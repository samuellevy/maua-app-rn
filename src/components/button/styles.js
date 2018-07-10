import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    boxButton:{
        marginTop: 10,
        paddingVertical: 7,
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 1,
        borderColor: '#fff',
        alignSelf: 'center',
    },
    txtSign:{
        color: colors.white,
        fontFamily: fonts.main,
        fontWeight: 'normal',
        fontSize: metrics.fonts.medium
    },
});

export default styles;
