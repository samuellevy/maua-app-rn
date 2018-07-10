import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    header:{
        width: '100%',
        position: 'absolute',
        paddingVertical: 10,
        paddingHorizontal: 20,
        top: 0,
    },
    turnBack:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        alignSelf: 'flex-start',
    },
    iconBack:{
        paddingRight: 10,
        color: colors.primary,
    },
    txtBack:{
        color: colors.primary,
    },
    
    content:{
        flex: 1,
        justifyContent: 'center',
    },
    boxWelcome:{
        marginVertical: metrics.marginDefault,
        marginHorizontal: 30,
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    txtWelcome:{
        fontSize: metrics.fonts.xxbig,
        fontWeight: 'bold',
        fontFamily: fonts.main,
        color: colors.primary,
        alignSelf: 'center',
    },
    image:{
        height: 100,
        resizeMode: 'contain'
    },
    txtInitial:{
        paddingVertical: metrics.padding,
        fontSize: metrics.fonts.medium,
        color: colors.gray,
        fontFamily: fonts.main,
        fontWeight: 'normal',
        alignSelf: 'center',
        textAlign: 'center',
        paddingVertical: metrics.marginDefault
    },
    
});

export default styles;
