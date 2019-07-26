
import React, { Component } from 'react';
import styles from './Styles';
import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import {checkAssetAction} from '../../Redux/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
class Generate extends Component {
    constructor() {
        super();
        this.state = {
            qrvalue: '',
            opneScanner: false,
        };
    }
    componentDidMount(){
        this.props.checkAssetAction({serialNumber:"7bc218b3-7b29-472b-a11c-7b37ffa2382e",userId:this.props.user[0].id})
        .then((value) => console.log(this.props.asset))

    }
    onOpenlink() {
        //Function to open URL, If scanned 
        Linking.openURL(this.state.qrvalue);
        //Linking used to open the URL in any browser that you have installed
    }
    onBarcodeScan(qrvalue) {
        //called after te successful scanning of QRCode/Barcode
        this.setState({ qrvalue: qrvalue });
        this.setState({ opneScanner: false });
    }
    onOpneScanner() {
        var that = this;
        //To Start Scanning
        if (Platform.OS === 'android') {
            async function requestCameraPermission() {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.CAMERA, {
                            'title': 'CameraExample App Camera Permission',
                            'message': 'CameraExample App needs access to your camera '
                        }
                    )
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        //If CAMERA Permission is granted
                        that.setState({ qrvalue: '' });
                        that.setState({ opneScanner: true });
                    } else {
                        alert("CAMERA permission denied");
                    }
                } catch (err) {
                    alert("Camera permission err", err);
                    console.warn(err);
                }
            }
            //Calling the camera permission function
            requestCameraPermission();
        } else {
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
        }
    }
    render() {
        //If qrvalue is set then return this view
        if (!this.state.opneScanner) {
            return (
                <View style={styles.container}>
                    <Text style={styles.heading}>React Native QR Code</Text>
                    <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: ' + this.state.qrvalue : ''}</Text>
                    <TouchableHighlight
                        onPress={() => this.onOpneScanner()}
                        style={styles.button}>
                        <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                            Open QR Scanner
                </Text>
                    </TouchableHighlight>
                </View>
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <CameraKitCameraScreen
                    showFrame={false}
                    //Show/hide scan frame
                    scanBarcode={true}
                    //Can restrict for the QR Code only
                    laserColor={'blue'}
                    //Color can be of your choice
                    frameColor={'yellow'}
                    //If frame is visible then frame color
                    colorForScannerFrame={'black'}
                    //Scanner Frame color
                    onReadCode={event =>
                        this.onBarcodeScan(event.nativeEvent.codeStringValue)
                    }
                />
            </View>
        );
    }
}
function mapStateToProps(state){
    return{
        asset:state.checkAssetReducer.asset,
        user:state.SignInReducer.User
    }
}
function dispatchToProps(dispatch){
    return bindActionCreators({
        checkAssetAction
    },dispatch)
}
export default connect(mapStateToProps,dispatchToProps)(Generate);
