import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    box:{
        position: 'relative',
        flex: 1,
        marginTop: 20,
        width: '105%',
        borderTopWidth: 0.5,
        borderTopColor: colors.regular,
        paddingTop: 8,
        paddingBottom: 12,
    },
    button:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    text:{
        fontSize: metrics.fonts.small,
        fontWeight: 'bold',
        color: colors.blue,
        textAlign: 'center',
    },
    icon:{
        color: colors.blue,
        paddingHorizontal: 10,
    }
    
});

export default styles;
