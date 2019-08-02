import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#2c3539',
        padding: 10,
        width: 300,
        // height:30,
        marginTop: 16
    },
    heading: {
        color: 'black',
        fontSize: 24,
        alignSelf: 'center',
        padding: 10,
        marginTop: 30
    },
    simpleText: {
        color: 'black',
        fontSize: 20,
        alignSelf: 'center',
        padding: 10,
        marginTop: 16
    },
    header: {
        flex: 0.3,
        alignItems: "center",
    }
});
