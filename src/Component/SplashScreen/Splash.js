
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
    Animated,
    Easing,
    ImageBackground
} from 'react-native';
import styles from './Styles';
// import {signInAction} from '../../Redux/action';
// import { signInRequest } from '../../Redux/User/action';
import { connect } from 'react-redux';
// export default class Splash extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             height: new Animated.Value(600),
//             width: new Animated.value(350),
//             animatedValue: new Animated.Value(0.3)

//         }

//     }
//     componentDidMount() {
//         Animated.timing(
//             this.state.width,
//             {
//                 toValue: 370,
//                 duration: 450
//             }
//         ).start();
//         Animated.timing(
//             this.state.height,
//             {
//                 toValue: 750,
//                 duration: 10000
//             }
//         ).start();
//         setTimeout(() => {
//             return this.props.navigation.navigate("Login");
//         }, 2000)

//     }

//     render() {
//         // const truckStyle = {
//         //     transform: [{ scale: this.state.animatedValue }]
//         // };
//         return (
//             <View style={styles.containerSplash}>
//                 <Animated.Image
//                     source={{
//                         uri:
//                             'https://aboutreact.com/wp-content/uploads/2019/04/site_banner_vertical.png',
//                     }}
//                     style={{
//                         width: width,
//                         height: height,
//                         position: 'absolute',
//                     }}
//                 />
//             </View>

//         );
//     }
// }
// function mapStateToProps(state) {
//     return {
//         User: state.SignInReducer.User
//     }
// }
// export default connect(mapStateToProps, { signInRequest })(Splash);
export default class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(0.3)
        }
    }
    componentDidMount() {
        Animated.timing(this.state.animatedValue, {
            toValue: 0.6,
            duration: 1000,
            easing: Easing.back()   
        }).start();
        setTimeout(() => {
                    return this.props.navigation.navigate("Login")
            
        }, 2000)
    }
    render() {
        const truckStyle = {
            transform: [{ scale: this.state.animatedValue }]
        };
        return (
            <ImageBackground style={styles.containerSplash} source={require("../../img/color-background.jpg")}>
                {/* <Animated.View style={{...this.props.style,opacity:this.state.animatedValue}}> */}
                <Animated.View style={truckStyle}>

                    <Animated.Image source={require("../../img/Logo.png")}>

                    </Animated.Image>
                </Animated.View>
            </ImageBackground>

        );
    }
}

