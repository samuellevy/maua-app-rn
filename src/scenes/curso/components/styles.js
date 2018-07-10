import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics, fonts } from '../../../styles';

const styles = StyleSheet.create({
    video: {
        padding: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 10,
    },
    viewVideo: {
        width: ((Dimensions.get('window').width - 50) / 6) * 3.5,
        height: ((((Dimensions.get('window').width - 50) / 6) * 3.5) * 9)/16,
        overflow: 'hidden'
    },
    thumbvideo:{
        width: '100%',
        height: '100%'
    },
    videoImage: {
        flex: 1,
    },
    videoInfo: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingLeft: 10,
    },
    videoTitle: {
        fontWeight: 'bold',
        color: '#7B9995',
        fontSize: 12,
        paddingBottom: 10,
    },
    videoDescription: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 11,
        color: '#243331',
        fontFamily: fonts.main,
        fontWeight: 'normal',
        paddingBottom: 10,
    },
    videoButton: {
        color: '#14CC82',
        fontSize: 11,
    },
    status:{
        position: 'absolute',
        left: 0,
        paddingVertical: 3,
        paddingHorizontal: 9,
        zIndex: 2,
        elevation: 2,
        color: colors.white,
        fontFamily: fonts.main,
        fontWeight: 'bold',
        fontSize: metrics.fonts.xsmall
    },
    statusNew:{
        backgroundColor: colors.yellow,
    },
    statusCompleted:{
        backgroundColor: colors.light,
    }
});

export default styles;
