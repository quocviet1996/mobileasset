
// //This is an example code to generate QR code//
// import React, { Component } from 'react';
// //import react in our code.
// import {
//     StyleSheet,
//     View,
//     TextInput,
//     TouchableOpacity,
//     Text,
//     FlatList
// } from 'react-native';
// // import all basic components
// import QRCode from 'react-native-qrcode';
// import { RNCamera } from 'react-native-camera';
// import styles from './Styles';
// import { Icon } from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';

// export default class Generate extends Component {
//     constructor() {
//         super();
//         this.state = {
//             inputValue: '',
//             asset: [],
//             valueForQRCode: '',
//         };
//     }

//     render() {

//         return (
//             <View style={styles.MainContainer}>
//                 {/* <LinearGradient
//                     start={{ x: 0.0, y: 0.25 }}
//                     end={{ x: 0.5, y: 1.0 }}
//                     locations={[0, 0.5, 0.6]}
//                     colors={['#4c669f', '#3b5998', '#192f6a']}
//                     style={styles.header}>
//                     <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 10 }}>

//                         <View></View>
//                         <Text style={styles.headerTitle}>Generate</Text>
//                         <TouchableOpacity >
//                             <Icon type="FontAwesome" name="sign-out" style={{ color: "red", fontSize: 25, }}> </Icon>
//                         </TouchableOpacity>
//                     </View>
//                 </LinearGradient> */}
//                 <QRCode
//                     value={this.props.navigation.state.params}
//                     //Setting the value of QRCode
//                     size={250}
//                     //Size of QRCode
//                     bgColor="#000"
//                     //Backgroun Color of QRCode
//                     fgColor="#fff"
//                 //Front Color of QRCode
//                 />             
//                 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
//                     <TouchableOpacity  style={styles.capture}>
//                         <Text style={{ fontSize: 14 }}> SNAP </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }
// }
// // const styles = StyleSheet.create({
// //     MainContainer: {
// //         flex: 1,
// //         margin: 10,
// //         alignItems: 'center',
// //         paddingTop: 40,
// //     },
// //     TextInputStyle: {
// //         width: '100%',
// //         height: 40,
// //         marginTop: 20,
// //         borderWidth: 1,
// //         textAlign: 'center',
// //     },
// //     button: {
// //         width: '100%',
// //         paddingTop: 8,
// //         marginTop: 10,
// //         paddingBottom: 8,
// //         backgroundColor: '#F44336',
// //         marginBottom: 20,
// //     },
// //     TextStyle: {
// //         color: '#fff',
// //         textAlign: 'center',
// //         fontSize: 18,
// //     },
// // });

//This is an example code to generate QR code//
import React, { Component } from 'react';
//import react in our code.
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Text,
    FlatList,
    ImageBackground
} from 'react-native';
// import all basic components
import QRCode from 'react-native-qrcode';
import styles from './Styles';
import { Icon } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import backgroundImage from 'images/Scan_background.jpg'

//import QRCode

export default class Generate extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            asset: [],
            // Default Value of the TextInput
            valueForQRCode: '',
            // Default value for the QR Code
        };
    }

    render() {
        return (
            <ImageBackground style={styles.MainContainer} source={backgroundImage}>
                <View style={{ flex: 0.5 }}></View>
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
                <TouchableOpacity
                    onPress={this.getTextInputValue}
                    activeOpacity={0.7}
                    style={styles.button}>
                    <LinearGradient
                        start={{ x: 0.0, y: 0.25 }}
                        end={{ x: 0.5, y: 1.0 }}
                        locations={[0, 0.5, 0.6]}
                        colors={["#E10000", "#E10000", "#8C0000"]}
                        style={styles.header}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", padding: 10 }}>
                            <Text style={{ fontSize: 20, color: "#fff" }}>Snap For SreenShot</Text>
                        </View>
                    </LinearGradient>
                </TouchableOpacity>
            </ImageBackground>
        );
    }
}






