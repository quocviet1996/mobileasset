
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
import FlatListItem from './FlatListItem';
// import all basic components
import QRCode from 'react-native-qrcode';
import { RNCamera } from 'react-native-camera';
import styles from './Styles';

export default class Generate extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            asset: [],
            valueForQRCode: '',
        };
    }
    takePicture = async () => {
        if (this.camera) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options);
            console.log(data.uri);
        }
    };
    render() {

        return (
            <View style={styles.MainContainer}>
                <QRCode
                    value={this.props.navigation.state.params}
                    //Setting the value of QRCode
                    size={250}
                    //Size of QRCode
                    bgColor="#000"
                    //Backgroun Color of QRCode
                    fgColor="#fff"
                //Front Color of QRCode
                />
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}></RNCamera>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
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


