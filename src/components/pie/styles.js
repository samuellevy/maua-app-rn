import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
	container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#00A6E3',
        fontSize: 17,
    },
});

export default styles;
