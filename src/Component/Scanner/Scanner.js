
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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import backgroundImage from 'images/Scan_background.jpg';
import CheckModal from '../Modal/CheckModal/CheckModal';
import { checkScannedAction, changeScanned, addAssetAction, checkAssetAction } from '../../Redux/action';
import { changeScannedAsset } from '../../services/api';
import styles from './Styles';

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
        // console.log(this.props.asset)
        if (this.props.asset.length > 0) {
          this.props.checkScannedAction({ serialnumber: asset.serialnumber })
            .then(() => {
              if (!this.props.hasCheck[0].isScanned) {
                this.props.changeScanned({ serialnumber: asset.serialnumber })
                  .then(() => {
                    this.refs.checkmodal.showAddModal(this.props.asset[0], this.state.isScanned)
                    setTimeout(() => {
                      this.setState({ isScanned: true })
                    }, 4000)
                  })

              }
              else {
                Alert.alert("tài sản đã được kiểm tra rồi")
                setTimeout(() => {
                  this.setState({ isScanned: true })
                }, 4000)
              }
            })
        }
        else {
          this.props.addAssetAction({ serialnumber: asset.serialnumber, name: asset.name, userId: asset.userId, categoryId: asset.categoryId })
            .then(() => {
              // console.log(this.props.addResult)
              if (this.props.addResult == "success") {
                this.refs.checkmodal.showAddModal(this.props.addAsset)
                setTimeout(() => {
                  this.setState({ isScanned: true })
                }, 4000)
              }
              else {
                Alert.alert("Lỗi không thể thêm")
              }
            })
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
            <BarcodeMask showAnimatedLine={false} width={200} height={200} />
          </RNCamera>
        </View>
      );
    }
    else {
      return (<View />);
    }
  }
}
function mapStateToProps(state) {
  return {
    asset: state.checkAssetReducer.asset,
    user: state.SignInReducer.User,
    hasCheck: state.checkScannedReducer.data,
    isScanned: state.checkScannedReducer.isScanned,
    addResult: state.addAssetReducer.result,
    addAsset: state.addAssetReducer.asset
  }
}
function dispatchToProps(dispatch) {
  return bindActionCreators({
    checkAssetAction,
    checkScannedAction,
    changeScanned,
    addAssetAction,
  }, dispatch)
}
export default connect(mapStateToProps, dispatchToProps)(Scanner);
