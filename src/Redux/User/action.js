import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE
} from './actionTypes';
import {api} from '../../Saga/api';

const signInRequest =(UserInfo) => {
    return {
        type: SIGN_IN_REQUEST,
        UserInfo
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
        dispatch(signInRequest(UserInfo));
        return api.signInWithEmailAndPassword(UserInfo).then((User) =>{
            if (User != null){
                dispatch(signInSuccess(User.user))
            }
        })
        .catch((error) =>{
            dispatch(signInFailure);
        })

    }
}
export default signInAction;