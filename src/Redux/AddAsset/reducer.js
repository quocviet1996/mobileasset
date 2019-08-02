import { ADD_ASSET_REQUEST, ADD_ASSET_SUCCESS, ADD_ASSET_FAILURED } from './actionType';
const initialState = {
    asset: null,
    success: false,
    error: false,
    result: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ASSET_REQUEST:
            return {
                ...state,
            }
        case ADD_ASSET_SUCCESS:
            return {
                ...state,
                asset:action.asset,
                result: action.result,
                success: true,
                error: false,
            }
        case ADD_ASSET_FAILURED:
            return {
                ...state,
                result: "",
                success: false,
                error: true
            }
        default:
            return state;
    }
}