import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollview: {
        marginBottom: 55,
    },
    border:{
        borderTopWidth: 0.5,
        borderTopColor: colors.regular,
    }
});

export default styles;
