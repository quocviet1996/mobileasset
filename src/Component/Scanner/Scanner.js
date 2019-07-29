
import React, { Component } from 'react';
import styles from './Styles';
import {
    Text,
    View,
    TouchableOpacity,
    PermissionsAndroid,
    Platform,
    ImageBackground,
    Image,
    TouchableHighlight,
    Alert
} from 'react-native';
import { CameraKitCameraScreen, CameraKitCamera } from 'react-native-camera-kit';
import { checkAssetAction } from '../../Redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import backgroundImage from 'images/Scan_background.jpg';
import CheckModal from '../Modal/CheckModal';

class Generate extends Component {
    constructor() {
        super();
        this.state = {
            qrvalue: '',
            opneScanner: false,
            showModalCheck: false,
        };
    }
    componentDidMount() {
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
                        this.setState({ qrvalue: '' });
                        this.setState({ opneScanner: true });
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
            this.setState({ qrvalue: '' });
            this.setState({ opneScanner: true });
        }

    }
    onBarcodeScan(qrvalue) {
        this.props.checkAssetAction({ serialNumber: qrvalue, userId: this.props.user[0].id })
            .then((value) => this.refs.checkmodal.showAddModal(this.props.asset))
        this.setState({ qrvalue: qrvalue, showModalCheck: true });
    }
    render() {
        const checkModal = this.state.showModalCheck ?
            <View style={styles.container}>
                <CheckModal ref={'checkmodal'} parent={this}></CheckModal>
            </View> : <View style={{ flex: 1 }}>
                <CameraKitCameraScreen
                    showFrame={false}
                    //Show/hide scan frame
                    scanBarcode={true}
                    //Can restrict for the QR Code only
                    laserColor={'blue'}
                    //Color can be of your choice
                    frameColor={'black'}
                    //If frame is visible then frame color
                    colorForScannerFrame={'black'}
                    //Scanner Frame color
                    onReadCode={event =>
                        this.onBarcodeScan(event.nativeEvent.codeStringValue)
                    }
                />
                <CheckModal ref={'checkmodal'} parent={this}></CheckModal>
            </View>
        return (
            {checkModal}
            // <View style={{ flex: 1 }}>
            //     <CameraKitCameraScreen
            //         showFrame={false}
            //         //Show/hide scan frame
            //         scanBarcode={true}
            //         //Can restrict for the QR Code only
            //         laserColor={'blue'}
            //         //Color can be of your choice
            //         frameColor={'black'}
            //         //If frame is visible then frame color
            //         colorForScannerFrame={'black'}
            //         //Scanner Frame color
            //         onReadCode={event =>
            //             this.onBarcodeScan(event.nativeEvent.codeStringValue)
            //         }
            //     />
            //     <CheckModal ref={'checkmodal'} parent={this}></CheckModal>
            // </View>
        );


    }
}
// import React, { Component } from 'react';
// import { checkAssetAction } from '../../Redux/action';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     TouchableOpacity,
//     Linking,
//     Alert,
//     View
// } from 'react-native';

// import QRCodeScanner from 'react-native-qrcode-scanner';

// export default class ScanScreen extends Component {
//     onSuccess = (e) => {
//         Linking
//             .openURL(e.data)
//             .catch(err => console.error('An error occured', err));
//     }


//     renderCamera() {
//         const isFocused = this.props.navigation.isFocused();

//         if (!isFocused) {
//             return null;
//         } else if (isFocused) {
//             return (
//                 <QRCodeScanner showMarker={true}
//                     onRead={(value) => Alert.alert(value.nativeEvent.codeStringValue)} />
//             )
//         }
//     }
//     render() {
//         return (
//             <View style={{ flex: 1 }}>
//                 {this.renderCamera()}
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     centerText: {
//         flex: 1,
//         fontSize: 18,
//         padding: 32,
//         color: '#777',
//     },
//     textBold: {
//         fontWeight: '500',
//         color: '#000',
//     },
//     buttonText: {
//         fontSize: 21,
//         color: 'rgb(0,122,255)',
//     },
//     buttonTouchable: {
//         padding: 16,
//     },
// });

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
