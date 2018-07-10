import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    titlePrimary: {
        fontSize: metrics.fonts.big,
        fontWeight: 'bold',
        color: colors.primary,
        paddingBottom: 10,
        fontFamily: fonts.main,
        paddingHorizontal: metrics.title.primary.padding
    },
});

export default styles;