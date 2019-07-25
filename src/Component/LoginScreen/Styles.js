import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1
    },
    Body: {
        flex: 1,
        // backgroundColor: "#008bdc",
        alignItems: "center"
    },
    logoContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    imgLogo: {
        margin: 10,
        height: 70,
        width: 70,
        justifyContent: "center",
        alignItems: "center"

    },
    TextInputContainer: {
        flex: 1,
        alignItems: "center",
        // height: 40,
        borderRadius: 5,
        // margin: 10,
        // backgroundColor: "#fff"
    },
    TextInput: {
        // margin: 10,
        flexDirection: "row", justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 50,
        borderRadius: 5,
        margin: 10,
    },
    btnContainer: {
        flex: 1,
        margin: 10,
        // paddingBottom: 50
    },
    Text: {
        height: 40,
        width: 100,
        color: "white",
        fontSize: 20,
        backgroundColor: "#91dcb0",
        paddingLeft: 15,
        paddingTop: 5,
        marginBottom: 15
    },
    // txtSignUp:{


    // }

})