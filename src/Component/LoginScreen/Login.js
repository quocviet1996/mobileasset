
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
import backgroundImage from 'images/Login_eCheck.jpg';
import {setAccountUser} from '../../Storage/storage';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: "",
        }
    }
    componentDidMount() {
        // console.log(this.props.User);
    }
    onSignIn() {
        if (this.state.username != "" && this.state.password != "") {
            this.props.signInAction({ username: this.state.username, password: this.state.password })
                .then(() => {
                    if (this.props.User) {
                        setAccountUser(JSON.stringify(this.props.User[0]))
                        .then(() =>{
                            this.props.navigation.navigate("ListAsset")
                        })
                        
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
        return (
            <ImageBackground style={styles.container} source={backgroundImage}>
                {/* <View style={styles.header}>
                    <Image style={{ tintColor: "black", resizeMode: "stretch", flex: 1 }} source={require("../../img/ic_launcher.png")}>
                    </Image>
                </View> */}
                <View style={{ flex: 1 }} />
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
                </View>
            </ImageBackground>

        );
    }
}
function mapStateToProps(state) {
    return {
        User: state.SignInReducer.User
    }
}
export default connect(mapStateToProps, { signInAction })(Login);

