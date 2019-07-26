import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE
} from './actionTypes';
// import {api} from '../../Saga/api';
import {SignInRequest} from './api';

const signInRequest =() => {
    return {
        type: SIGN_IN_REQUEST,
        
    }
}
const signInSuccess =(User) =>{
    return {
        type: SIGN_IN_SUCCESS,
        User
    }
}
const signInFailure=() =>{
    return {
        type: SIGN_IN_FAILURE,
 
    }
}
const signInAction=(UserInfo) =>{
    return (dispatch) =>{
        dispatch(signInRequest());
        return SignInRequest(UserInfo).then((User) =>{
            // console.log(User.data.user)
            if (User != null){
                dispatch(signInSuccess(User.data.user))
            }
            else{
                dispatch(signInFailure)
            }
        })
        .catch((error) =>{
            dispatch(signInFailure);
        })

    }
}
export default signInAction;