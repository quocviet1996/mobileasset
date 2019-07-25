
// //This is an example code to generate QR code//
// import React, { Component } from 'react';
// //import react in our code.
// import {
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableOpacity,
//   Text,
//   FlatList
// } from 'react-native';
// import FlatListItem from './FlatListItem';
// // import all basic components
// import QRCode from 'react-native-qrcode';
// //import QRCode

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       inputValue: '',
//       asset: [],
//       // Default Value of the TextInput
//       valueForQRCode: '',
//       // Default value for the QR Code
//     };
//   }
//   componentDidMount() {
//      fetch("http://192.168.11.2:3000/asset")
//       .then((response) => response.json())
//       .then((responseJson) => this.setState({asset:responseJson.data}))
//       .catch((error) => console.log("error " + error))

//   }


//   render() {
//     return (
//       // console.log(this.state.asset),
//       <View style={styles.MainContainer}>
//         <FlatList
//         data={this.state.asset}
//         renderItem={({item}) =>{
//           return <FlatListItem item={item}> </FlatListItem>
//         }}
//         >
//         </FlatList>
//         {/* <QRCode
//           value={this.state.asset}
//           //Setting the value of QRCode
//           size={250}
//           //Size of QRCode
//           bgColor="#000"
//           //Backgroun Color of QRCode
//           fgColor="#fff"
//         //Front Color of QRCode
//         /> */}
//         <TextInput
//           // Input to get the value to set on QRCode
//           style={styles.TextInputStyle}
//           onChangeText={text => this.setState({ inputValue: text })}
//           underlineColorAndroid="transparent"
//           placeholder="Enter text to Generate QR Code"
//         />
//         <TouchableOpacity
//           onPress={this.getTextInputValue}
//           activeOpacity={0.7}
//           style={styles.button}>
//           <Text style={styles.TextStyle}> Generate QR Code </Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default App;
// const styles = StyleSheet.create({
//   MainContainer: {
//     flex: 1,
//     margin: 10,
//     alignItems: 'center',
//     paddingTop: 40,
//   },
//   TextInputStyle: {
//     width: '100%',
//     height: 40,
//     marginTop: 20,
//     borderWidth: 1,
//     textAlign: 'center',
//   },
//   button: {
//     width: '100%',
//     paddingTop: 8,
//     marginTop: 10,
//     paddingBottom: 8,
//     backgroundColor: '#F44336',
//     marginBottom: 20,
//   },
//   TextStyle: {
//     color: '#fff',
//     textAlign: 'center',
//     fontSize: 18,
//   },
// });
//This is an example code to Scan QR code//
//////////////////////////////////////////////////////////////////
import React, { Component } from 'react';
//import react in our code.
import { Text, View, Linking, TouchableHighlight, PermissionsAndroid, Platform, StyleSheet} from 'react-native';
// import all basic components
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
//import CameraKitCameraScreen we are going to use.
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      //variable to hold the qr value
      qrvalue: '',
      opneScanner: false,
    };
  }
    componentDidMount() {
     fetch("http://192.168.11.2:3000/asset")
      .then((response) => response.json())
      .then((responseJson) => console.log(responseJson))
      .catch((error) => console.log("error " + error))

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
    var that =this;
    //To Start Scanning
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
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
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      //Calling the camera permission function
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ opneScanner: true });
    }    
  }
  render() {
    let displayModal;
    //If qrvalue is set then return this view
    if (!this.state.opneScanner) {
      return (
        <View style={styles.container}>
            <Text style={styles.heading}>React Native QR Code Example</Text>
            <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
            {this.state.qrvalue.includes("http") ? 
              <TouchableHighlight
                onPress={() => this.onOpenlink()}
                style={styles.button}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
              </TouchableHighlight>
              : null
            }
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
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
  }
});
////////////////////////////////////////////////////////////////////////////
// import React, { PureComponent } from 'react';
// import { AppRegistry, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { RNCamera } from 'react-native-camera';

// export default class ExampleApp extends PureComponent {
//   render() {
//     return (
//       <View style={styles.container}>
//         <RNCamera
//           ref={ref => {
//             this.camera = ref;
//           }}
//           style={styles.preview}
//           type={RNCamera.Constants.Type.back}
//           flashMode={RNCamera.Constants.FlashMode.on}
//           androidCameraPermissionOptions={{
//             title: 'Permission to use camera',
//             message: 'We need your permission to use your camera',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           androidRecordAudioPermissionOptions={{
//             title: 'Permission to use audio recording',
//             message: 'We need your permission to use your audio',
//             buttonPositive: 'Ok',
//             buttonNegative: 'Cancel',
//           }}
//           onGoogleVisionBarcodesDetected={({ barcodes }) => {
//             console.log(barcodes);
//           }}
//         />
//         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
//           <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
//             <Text style={{ fontSize: 14 }}> SCREEN SHOT </Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   }

//   takePicture = async() => {
//     if (this.camera) {
//       const options = { quality: 0.5, base64: true };
//       const data = await this.camera.takePictureAsync(options);
//       console.log(data.uri);
//     }
//   };
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: 'black',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   capture: {
//     flex: 0,
//     backgroundColor: '#fff',
//     borderRadius: 5,
//     padding: 15,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     margin: 20,
//   },
// });

