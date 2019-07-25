
//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    FlatList
} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode';
//import QRCode

class App extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            // Default Value of the TextInput
            valueForQRCode:'',
            // Default value for the QR Code
        };
    }

    getTextInputValue = () => {
        return fetch("http://192.168.11.2:3000/asset")
            .then((response) => response.json())
            .then((responseJson) => console.log(responseJson))
            .catch((error) => console.log("error " + error))
    };
    QRCode() {
        this.setState({valueForQRCode:this.props.item.serialnumber})

    }
    render() {
        return (
            <View style={styles.MainContainer}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.button}
                    onPress={() => this.QRCode()}>
                    <Text> {this.props.item.name}</Text>
                </TouchableOpacity>
                <QRCode
                    value={this.state.valueForQRCode}
                    //Setting the value of QRCode
                    size={200}
                    //Size of QRCode
                    bgColor="#000"
                    //Backgroun Color of QRCode
                    fgColor="#fff"
                //Front Color of QRCode
                />
            </View >
        );
    }
}
export default App;
const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        paddingTop: 40,
    },
    TextInputStyle: {
        width: '100%',
        height: 40,
        marginTop: 20,
        borderWidth: 1,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        paddingTop: 8,
        marginTop: 10,
        paddingBottom: 8,
        backgroundColor: '#F44336',
        marginBottom: 20,
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
});