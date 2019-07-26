import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT
} from './actionTypes';
const initialState = {
    dataRes: null,
    success: false,
    error: false,
    errorMessage: null,
    User: null,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                // UserInfo:action.UserInfo

            };
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                error: false,
                success: true,
                User: action.User,

            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                error: true,
                success: false,
                User: null,
                errorMessage: " Bạn đã đăng nhập thất bại"
            }
        case SIGN_OUT: {
            return {
                ...state,
                success: false,
                error: false,
                User: null,
            }
        }
        default:
            return state;
    }
}