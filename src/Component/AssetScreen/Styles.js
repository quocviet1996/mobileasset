import {
    StyleSheet, Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
    wrapper: { flex: 1 },
    header: {
        flex: 1,
        backgroundColor: '#2ABB9C',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },// eslint-disable-line
    headerTitle: {
        fontFamily: 'Avenir',
        color: '#fff',
        fontSize: 20
    },
    backIconStyle: {
        width: 30,
        height: 30
    },
    body: {
        flex: 10,
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