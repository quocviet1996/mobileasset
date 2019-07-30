
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
import backgroundImage from 'images/Scan_background.jpg'

class AddAsset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameAsset: "",
            producer: "",
            userName: "",
            year: "",
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
        return (
            <ImageBackground style={styles.container} source={backgroundImage}>
                <View style={styles.TextInputContainer}>
                    <View style={styles.TextInput}>
                        <Icon type="FontAwesome" name="database" style={{
                            padding: 10,
                            margin: 5, color: "#2a1e50", fontSize: 30
                        }}></Icon>
                        <TextInput style={{ flex: 1 }} value={this.state.nameAsset} onChangeText={(value) => this.setState({ nameAsset: value })} placeholder={"Tên Tài Sản"} >
                        </TextInput>
                    </View>

                    <View style={styles.TextInput}>
                        <Icon type='FontAwesome' name='building' style={{
                            padding: 10,
                            margin: 5, color: "#2a1e50", fontSize: 30
                        }}></Icon>
                        <TextInput style={{ flex: 1 }} value={this.state.producer} secureTextEntry={true} onChangeText={(value) => this.setState({ producer: value })} placeholder={"Nhà Sản Xuất"} >
                        </TextInput>
                    </View>
                    <View style={styles.TextInput}>
                        <Icon type='FontAwesome' name='user' style={{
                            padding: 10,
                            margin: 5, color: "#2a1e50", fontSize: 30
                        }}></Icon>
                        <TextInput style={{ flex: 1 }} value={this.state.userName} secureTextEntry={true} onChangeText={(value) => this.setState({ userName: value })} placeholder={"Người Sử Dụng"} >
                        </TextInput>
                    </View>

                    <View style={styles.TextInput}>
                        <Icon type='FontAwesome' name='calendar-alt' style={{
                            padding: 10,
                            margin: 5, color: "#2a1e50", fontSize: 30
                        }}></Icon>
                        <TextInput style={{ flex: 1 }} value={this.state.year} secureTextEntry={true} onChangeText={(value) => this.setState({ year: value })} placeholder={"Năm Sản Xuất"} >
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
export default connect(mapStateToProps, { signInAction })(AddAsset);

