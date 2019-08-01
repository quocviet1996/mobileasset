
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
import { connect } from 'react-redux';
import backgroundImage from 'images/splash_screen.jpg';
import logo from 'images/logoFWD.png';
import logoReact from 'images/reactjs.png';
import { getAccountUser } from '../../Storage/storage';
import { signInAction } from '../../Redux/action';
import { bindActionCreators } from 'redux';
class Splash extends Component {
    constructor(props) {
        super(props);
        // this.spinValue = new Animated.Value(0)

        this.state = {
            animatedValue: new Animated.Value(0.3),
            spinValue: new Animated.Value(0)
        }
    }
    componentDidMount() {
        Animated.timing(this.state.animatedValue, {
            toValue: 0.6,
            duration: 1000,
            easing: Easing.back()
        }).start();
        setTimeout(() => {
            getAccountUser().then((result) => {
                // console.log(JSON.parse(result))
                const user = JSON.parse(result);
                // console.log(result)
                if (user != null) {
                    this.props.signInAction({ username: user.username, password: user.password })
                        .then(() => {
                            // console.log(this.props.user)
                            return this.props.navigation.navigate("ListAsset")


                            //     })
                        })
                }
                else {
                    return this.props.navigation.navigate("Login");


                }
            })
            // // var account = JSON.parse(await getAccountUser());
            // if (this.props.user) {
            //     return this.props.navigation.navigate("ListAsset")
            // }
            // else {
            //     return this.props.navigation.navigate("Login")
            // }
        }, 2000)
    }
    spin() {
        this.state.spinValue
        Animated.timing(
            this.state.spinValue,
            {
                toValue: 1,
                duration: 4000,
                easing: Easing.linear
            }
        ).start(() => this.spin())
    }
    render() {
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })
        const truckStyle = {
            transform: [{ scale: this.state.animatedValue }],
        };
        return (
            <ImageBackground style={styles.containerSplash} source={backgroundImage}>
                {/* <Animated.View style={{...this.props.style,opacity:this.state.animatedValue}}> */}
                <View>
                    <Animated.View style={truckStyle}>
                        {/* <Animated.Image  source={logoReact} >
                        </Animated.Image> */}
                    </Animated.View>
                </View>
            </ImageBackground>

        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.SignInReducer.User
    }
}
function dispatchToProps(dispatch) {
    return bindActionCreators({
        signInAction

    }, dispatch)
}
export default connect(mapStateToProps, dispatchToProps)(Splash);
