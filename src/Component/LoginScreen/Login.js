
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
    ImageBackground,
    KeyboardAvoidingView
} from 'react-native';
import { Icon } from 'native-base';
import styles from './Styles';
import { SignInRequest } from '../../Redux/User/api';
// import {signInAction} from '../../Redux/action';
// import {signInRequest} from '../../Redux/User/action';
import { connect } from 'react-redux';
import { GET_USER, SIGN_IN } from '../../ultil/api';
import axios from 'axios';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            userName: "",
            phone: "",
            avatar: "",
            uid: "",
            a: [],
        }
    }
    componentDidMount() {
        // axios.get(GET_USER).then((value) => console.log(value.data.data))
        axios.post(SIGN_IN, {
            username: "viet",
            password: "1234"
        }).then((value) => console.log(value))

        // fetch(SIGN_IN, {
        //     method: "POST",
        //     headers: {
        //         "Accept": "application/json",
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         username:"viet",
        //         password:"1234"
        //     })
        // }
        //     )
        //     .then((response) => console.log(response.json()))
        //     .then((responseJson) => console.log(responseJson))
        //     .catch((error) => console.log("error" + error))

    }
    onSignIn() {
        if (this.state.email != "" && this.state.password != "") {
        }
    }
    render() {
        // console.log(this.state.a)
        return (
            <ImageBackground style={styles.Body} source={require("../../img/color-background.jpg")}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../img/Logo.png")} style={styles.imgLogo} />
                    <Text style={{ fontSize: 30, color: "white" }}>Your Asset</Text>
                </View>
                <View style={styles.TextInputContainer}>
                    <View style={styles.TextInput}>
                        <Icon type="FontAwesome" name="user" style={{
                            padding: 10,
                            margin: 5, color: "#2a1e50", fontSize: 30
                        }}></Icon>
                        <TextInput style={{ flex: 1 }} value={this.state.userName} onChangeText={(value) => this.setState({ username: value })} placeholder={"input UserName"} >
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
// function mapStateToProps(state){
//     return{
//         User:state.SignInReducer.User
//     }
// }
// export default connect(mapStateToProps,{signInRequest})(Login);

