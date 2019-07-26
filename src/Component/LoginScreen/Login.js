
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
    ImageBackground,
    KeyboardAvoidingView,
    Dimensions
} from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';
import { signInAction } from '../../Redux/action';
import { connect } from 'react-redux';
import { Header } from 'native-base';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: "",
        }
    }
    onSignIn() {
        if (this.state.username != "" && this.state.password != "") {
            this.props.signInAction({ username: this.state.username, password: this.state.password })
                .then(() => {
                    if (this.props.User) {
                        this.props.navigation.navigate("ListAsset")
                    }
                    else {
                        Alert.alert(
                            'Notice',
                            "Bạn đã đăng nhập thất bại",
                            [
                                {
                                    text: 'OK', onPress: () => { return }
                                },
                            ],
                            { cancelable: false }
                        )

                    }

                }).catch((error) => {
                    console.log("error is " + error)

                })
        }
    }
    render() {
        // console.log(this.state.a)
        return (
            <ImageBackground style={styles.Body} source={require("../../img/color-background.jpg")}>
                <View style={styles.header}>
                    <Image style={{ tintColor: "black", resizeMode: "stretch", flex: 1 }} source={require("../../img/ic_launcher.png")}>
                    </Image>
                </View>
                <View style={styles.TextInputContainer}>
                    <View style={styles.TextInput}>
                        <Icon type="FontAwesome" name="user" style={{
                            padding: 10,
                            margin: 5, color: "#2a1e50", fontSize: 30
                        }}></Icon>
                        <TextInput style={{ flex: 1 }} value={this.state.username} onChangeText={(value) => this.setState({ username: value })} placeholder={"input UserName"} >
                        </TextInput>
                    </View>
                    <View style={styles.TextInput}>
                        <Icon type='FontAwesome' name='lock' style={{
                            padding: 10,
                            margin: 5, color: "#2a1e50", fontSize: 30
                        }}></Icon>
                        <TextInput style={{ flex: 1 }} value={this.state.password} secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })} placeholder={"input Password"} >
                        </TextInput>
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => this.onSignIn()}>
                        <Text style={styles.Text}>Sign In</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity   onPress={() => this.onSignUp()}>
                    <Text style={{...styles.Text,backgroundColor:"#e41e26"}}>Sign Up</Text>
                </TouchableOpacity> */}
                </View>

            </ImageBackground>

        );
    }
    // this.props.signInAction.signInRequest({email:this.state.email,password:this.state.password})
}
function mapStateToProps(state) {
    return {
        User: state.SignInReducer.User
    }
}
export default connect(mapStateToProps, { signInAction })(Login);

