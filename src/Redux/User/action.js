import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT
} from './actionTypes';
// import {api} from '../../Saga/api';
// import api from '../../services';

import { SignInRequest } from '../../services/api';

const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST,

    }
}
const signInSuccess = (User) => {
    return {
        type: SIGN_IN_SUCCESS,
        User
    }
}
const signInFailure = () => {
    return {
        type: SIGN_IN_FAILURE,

    }
}
 const signOutRequest = () =>{
    return {
        type:SIGN_OUT
    }
}
export const signOutAction = () =>{
    return (dispatch) =>{
        // dispatch(signInRequest());
        return dispatch(signOutRequest)
    }
}
const signInAction = (UserInfo) => {
    return (dispatch) => {
        dispatch(signInRequest());
        return SignInRequest(UserInfo).then((User) => {
            if (User != null) {
                dispatch(signInSuccess(User.data.user))
            }
            else {
                dispatch(signInFailure)
            }
        })
            .catch((error) => {
                dispatch(signInFailure);
            })

    }
}
export default signInAction;