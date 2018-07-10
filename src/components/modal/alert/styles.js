import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    boxContainer: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        width: 280,
    },

    boxModal: {
        width: "80%",
        backgroundColor: "#ffffff",
    }
})

export default styles;