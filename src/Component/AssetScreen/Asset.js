
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Alert,
} from 'react-native';
import styles from './Styles';
// import {signInAction} from '../../Redux/action';
// import {signInRequest} from '../../Redux/User/action';
import {connect} from 'react-redux';
export default  class Asset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            userName:"",
            phone:"",
            avatar:"",
            uid:"",
        }
    }

    render() {
        return (
            <View style={styles.Body}>
                <Text>a</Text>
               
            </View>

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

