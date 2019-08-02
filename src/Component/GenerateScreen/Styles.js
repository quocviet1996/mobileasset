import {
    StyleSheet,
} from 'react-native';
export default StyleSheet.create({
    MainContainer: {
        flex: 1,
        // margin: 10,
        // alignItems: 'center',
        paddingTop: 40,
        // backgroundColor: 'white',
        alignItems: 'center',
        // justifyContent: 'center'
    },
    header: {
        // flex: 1,
        // backgroundColor: '#2ABB9C',
        alignItems: 'center',
        // paddingHorizontal:15,

        justifyContent: 'center',
    },

    headerTitle: {
        // backgroundColor:"red",
        fontFamily: 'Avenir',
        color: '#fff',
        fontWeight: "bold",
        fontSize: 20,
        opacity: 0.3,
        paddingLeft: 10,
    },
    TextInputStyle: {
        width: '100%',
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        textAlign: 'center',
    },
    button: {
        flex: 0.2,
        // width: '100%',
        paddingTop: 8,
        marginTop: 10,
        paddingBottom: 8,
        marginBottom: 20,
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
});