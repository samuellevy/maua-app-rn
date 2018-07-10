import { StyleSheet, Platform } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
    header: {
        paddingTop: (Platform.OS === 'ios') ? metrics.headerPadding : 0,
        height: (Platform.OS === 'ios') ? metrics.headerHeight : 70,
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: 50,
        resizeMode: 'contain'
    }
});

export default styles;