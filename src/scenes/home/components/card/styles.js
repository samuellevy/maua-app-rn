import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        paddingTop: 10,
        position: 'relative',
        marginTop: 10,
    },
    card:{
        flex: 1,
        width: '95%',
        margin: '2.5%',
        borderRadius: 3,
        paddingHorizontal: 20,
        paddingTop: 70,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        alignItems: 'center',
        backgroundColor: colors.white,
    },
});

export default styles;
