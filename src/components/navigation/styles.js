import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from '../../styles';

const styles = StyleSheet.create({
    container:{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    navBar:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#FFF",
        paddingTop: 5,
        shadowOffset:{  width: 1,  height: 1,  },
        shadowColor: '#dce0e1',
        shadowOpacity: 1.0,
    },
    tabBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ddd',
        // borderWidth: 2,
    },
    title:{
        fontSize: 12,
        fontFamily: fonts.main,
        paddingBottom: 5,
        color: '#7B9995',
    },
    icon:{
        color: '#7B9995',
    }
});

export default styles;
