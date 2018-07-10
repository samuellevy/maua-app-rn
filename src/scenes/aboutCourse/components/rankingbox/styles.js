import { StyleSheet, Platform } from 'react-native';
import { colors, metrics, fonts } from '../../../../styles';

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 15,
    },
    box:{
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    split:{
        width: '47%',  
        borderRadius: 3,
        elevation: 2,
        shadowColor: colors.black,
        shadowOpacity: 0.2,
        shadowRadius: 1,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor: colors.white,  
    },
    boxSplitText:{
        borderRightWidth: 1,
        borderRightColor: colors.regular,
    },
    splitTitleBox:{
        backgroundColor: colors.yellow,
        padding: 5,
    },
    colorGree:{
        backgroundColor: colors.light,
        padding: 5,
    },
    textGree: {
        color: colors.light, 
    },
    textYellow: {
        color: colors.yellow,  
    },
    splitTitleBoxLeft:{
        borderTopLeftRadius: 3,
    },
    splitTitleBoxRight:{
        borderTopRightRadius: 3,
    },
    splitTitle:{
        fontSize: metrics.fonts.xsmall,
        fontWeight: 'bold',
        color: colors.white,
        textAlign: 'center',
    },
    splitText:{
        fontSize: metrics.fonts.xbig,
        lineHeight: metrics.fonts.xbig,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: colors.fontColor,
    },
    splitTextScore:{
        color: colors.yellow,
    },

});

export default styles;
