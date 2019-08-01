import {
    StyleSheet, Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
    wrapper: { flex: 1 },
    header: {
        // flexDirection:"row",
        flex: 0.1,
        // height:60,
        backgroundColor: '#2ABB9C',
        // padding:5,
        // alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 10
    },// eslint-disable-lines
    headerTitle: {
        // backgroundColor:"red",
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight:"bold",
        fontSize: 20,
        opacity:0.3,
        paddingLeft:10,
    },
    backIconStyle: {
        width: 30,
        height: 30
    },
    body: {
        flex: 1,
        backgroundColor: '#F6F6F6'
    },
    orderRow: {
        height: width / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowOffset: { width: 2, height: 2 },
        shadowColor: '#DFDFDF',
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around'
    },
    textName: {
        color: '#9A9A9A',
        fontWeight: 'bold'
    },
    textvalue: {
        color: '#2ABB9C'

    }

});