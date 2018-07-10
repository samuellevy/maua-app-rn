import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#F7FBFC',
    },
    containerVideo:{
        flex: 1,
        paddingHorizontal: metrics.container.defaultPadding,
        paddingTop: metrics.headerPadding,
        marginBottom: metrics.container.marginBottom,
    },
    primaryTitle: {
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#00985B',
    }
});

export default styles;
