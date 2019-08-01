
// import React, { Component } from 'react';
// import styles from './Styles';
// import {
//   Text,
//   View,
//   TouchableOpacity,
//   PermissionsAndroid,
//   Platform,
//   ImageBackground,
//   Image,
//   TouchableHighlight,
//   Alert
// } from 'react-native';
// import { CameraKitCameraScreen, CameraKitCamera } from 'react-native-camera-kit';
// import { checkAssetAction } from '../../Redux/action';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import backgroundImage from 'images/Scan_background.jpg';
// import CheckModal from '../Modal/CheckModal/CheckModal';
// import BarcodeMask from 'react-native-barcode-mask';


// class Generate extends Component {
//   constructor() {
//     super();
//     this.state = {
//       qrvalue: '',
//       opneScanner: false,
//       showModalCheck: false,
//     };
//   }
//   componentDidMount() {
//     // if (Platform.OS === 'android') {
//     //     async function requestCameraPermission() {
//     //         try {
//     //             const granted = await PermissionsAndroid.request(
//     //                 PermissionsAndroid.PERMISSIONS.CAMERA, {
//     //                     'title': 'CameraExample App Camera Permission',
//     //                     'message': 'CameraExample App needs access to your camera '
//     //                 }
//     //             )
//     //             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     //                 this.setState({ qrvalue: '' });
//     //                 this.setState({ opneScanner: true });
//     //             } else {
//     //                 alert("CAMERA permission denied");
//     //             }
//     //         } catch (err) {
//     //             console.log(err)
//     //         }
//     //     }
//     //     requestCameraPermission();
//     // } else {
//     //     this.setState({ qrvalue: '' });
//     //     this.setState({ opneScanner: true });
//     // }

//   }
//   onBarcodeScan(qrvalue) {
//     // console.log(qrvalue)
//     this.props.checkAssetAction({ serialNumber: qrvalue, userId: this.props.user[0].id })
//       .then((value) => {
//         if (this.props.asset.length > 0) {
//           // this.refs.checkmodal.showAddModal(this.props.asset[0])
//           this.props.navigation.navigate("CheckModal", this.props.asset[0])
//         }
//         else {
//           this.props.navigation.navigate("AcceptModal", qrvalue)
//         }

//       })
//   }
//   render() {
//     const checkModal = this.state.showModalCheck ?
//       <View style={styles.container}>
//         <CheckModal asset={this.props.asset} ref={'checkmodal'} parent={this}></CheckModal>
//       </View> : <View style={{ flex: 1 }}>
//         <CameraKitCameraScreen
//           showFrame={false}
//           //Show/hide scan frame
//           scanBarcode={true}
//           //Can restrict for the QR Code only
//           laserColor={'blue'}
//           //Color can be of your choice
//           frameColor={'black'}
//           //If frame is visible then frame color
//           colorForScannerFrame={'black'}
//           //Scanner Frame color
//           onReadCode={event =>
//             this.onBarcodeScan(event.nativeEvent.codeStringValue)
//           }
//         />
//         <CheckModal ref={'checkmodal'} parent={this}></CheckModal>
//       </View>
//     return (
//       // <View style={{flex:1}}>
//       //     {checkModal}

//       // </View>

//       <View style={{ flex: 1 }}>
//         <CameraKitCameraScreen
//           showFrame={false}
//           //Show/hide scan frame
//           scanBarcode={true}
//           //Can restrict for the QR Code only
//           laserColor={'blue'}
//           //Color can be of your choice
//           frameColor={'black'}
//           //If frame is visible then frame color
//           colorForScannerFrame={'black'}
//           //Scanner Frame color
//           onReadCode={event =>
//             this.onBarcodeScan(event.nativeEvent.codeStringValue)
//           }
//         >
//           {/* <BarcodeMask showAnimatedLine={false} width={300} height={200} edgeBorderWidth={1} /> */}
//         </CameraKitCameraScreen>
//         {/* <CheckModal ref={'checkmodal'} parent={this}></CheckModal> */}
//       </View>
//     );


//   }
// }
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

// function mapStateToProps(state) {
//   return {
//     asset: state.checkAssetReducer.asset,
//     user: state.SignInReducer.User
//   }
// }
// function dispatchToProps(dispatch) {
//   return bindActionCreators({
//     checkAssetAction
//   }, dispatch)
// }
// export default connect(mapStateToProps, dispatchToProps)(Generate);
import React, { PureComponent, Component } from 'react';
import {
  StyleSheet, Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ImageBackground,
  Image,
  TouchableHighlight,
  Alert
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import BarcodeMask from 'react-native-barcode-mask';
// import styles from './Styles';
import { checkAssetAction } from '../../Redux/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import backgroundImage from 'images/Scan_background.jpg';
import CheckModal from '../Modal/CheckModal/CheckModal';
class Scanner extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      isDisplayCheckModal: false,
      isScanned: true,
      focusedScreen: false
    })
  }
  componentDidMount() {
    const { navigation } = this.props;
    navigation.addListener('willFocus', () =>
      this.setState({ focusedScreen: true })
    );
    navigation.addListener('willBlur', () =>
      this.setState({ focusedScreen: false })
    );
  }
  handleDisplayModal = () => {
    this.setState({
      isDisplayCheckModal: !this.state.isDisplayCheckModal
    });
  }
  ScanQR(barcodes) {
    // console.log(JSON.parse(barcodes[0].dataRaw))
    const asset = JSON.parse(barcodes[0].dataRaw);
    this.setState({ isScanned: false });
    this.props.checkAssetAction({ serialNumber: asset.serialnumber, userId: this.props.user[0].id })
      .then((value) => {
        if (this.props.asset.length > 0) {
          this.refs.checkmodal.showAddModal(this.props.asset[0], this.state.isScanned)
          setTimeout(() => {
            this.setState({ isScanned: true })
          }, 4000)
        }
        else {
          this.props.navigation.navigate("AcceptModal", barcodes[0].dataRaw)
        }
      })
  }
  render() {
    const { focusedScreen } = this.state;
    if (focusedScreen) {
      return (
        <View style={styles.container}>
          <CheckModal
            ref={"checkmodal"}
            isDisplayCheckModal={this.state.isDisplayCheckModal}

          >
          </CheckModal>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            // reactivateTimeout
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            oogleVisionBarcodeType={RNCamera.Constants.GoogleVisionBarcodeDetection.BarcodeType.QR_CODE}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              if (barcodes.length > 0) {
                if (this.state.isScanned) {
                  this.ScanQR(barcodes)
                }
              }
            }}
          >
            <BarcodeMask showAnimatedLine={false} width={300} height={200} edgeBorderWidth={1} />
          </RNCamera>

        </View>
      );
    }
    else {
      return (<View></View>);
    }


  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
}

const styles = StyleSheet.create({
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
});
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
export default connect(mapStateToProps, dispatchToProps)(Scanner);
