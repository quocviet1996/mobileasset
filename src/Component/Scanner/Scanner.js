
import React, { Component } from 'react';
import styles from './Styles';
import {
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    Platform,
    ImageBackground,
    Image
} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
import { checkAssetAction } from '../../Redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class Generate extends Component {
    constructor() {
        super();
        this.state = {
            qrvalue: '',
            opneScanner: false,
        };
    }
    onBarcodeScan(qrvalue) {
        this.props.checkAssetAction({ serialNumber: qrvalue, userId: this.props.user[0].id })
            .then((value) => console.log(this.props.asset))
        this.setState({ qrvalue: qrvalue });
        this.setState({ opneScanner: false });
    }
    onOpneScanner() {
        var that = this;
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
            requestCameraPermission();
        } else {
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
        }
    }
    render() {
        if (!this.state.opneScanner) {
            return (
                <View style={{ flex: 1 }}>
                    {this.onOpneScanner()}

                </View>
                // <ImageBackground style={styles.container} source={require("../../img/color-background.jpg")}>
                //     <View style={styles.header}>
                //         <Image style={{ tintColor: "black", resizeMode: "stretch", flex: 1 }} source={require("../../img/ic_launcher.png")}>
                //         </Image>
                //     </View>
                //     <View style={{flex:1}}>
                //     <Text style={styles.heading}>Scanner Your Asset Here</Text>
                //     <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: ' + this.state.qrvalue : ''}</Text>
                //     <TouchableOpacity
                //         onPress={() => this.onOpneScanner()}
                //         style={styles.button}>
                //         <Text style={{ color: '#FFFFFF', fontSize: 18 }}>
                //             Open QR Scanner
                // </Text>
                //     </TouchableOpacity>
                //     </View>
                // </ImageBackground>
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
function mapStateToProps(state) {
    return {
        asset: state.checkAssetReducer.asset,
        user: state.SignInReducer.User
    }
}
function dispatchToProps(dispatch) {
    return bindActionCreators({
        checkAssetAction
    }, dispatch)
}
export default connect(mapStateToProps, dispatchToProps)(Generate);
