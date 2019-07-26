
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

class Splash extends Component {
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
            if (this.props.user) {
                return this.props.navigation.navigate("Scanner")
            }
            else {
                return this.props.navigation.navigate("Login")
            }
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

                    <Animated.Image source={require("../../img/Batman_Logo.png")}>

                    </Animated.Image>
                </Animated.View>
            </ImageBackground>

        );
    }
}
function mapStateToProps(state) {
    return {
        user: state.SignInReducer.User
    }
}
export default connect(mapStateToProps)(Splash);
