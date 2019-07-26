import {
    CHECK_ASSET_EXISTS,
    CHECK_ASSET_EXISTS_SUCCESS,
    CHECK_ASSET_EXISTS_FAILURED
} from './actionTypes';
const initialState = {
    asset: [],
    success: false,
    error: false,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case CHECK_ASSET_EXISTS:
            return {
                ...state,
                asset: [],
                success: false,
                error: false,
            }
        case CHECK_ASSET_EXISTS_SUCCESS:
            return {
                ...state,
                asset: action.asset,
                success: true,
                error: false
            }
        case CHECK_ASSET_EXISTS_FAILURED:
            return {
                ...state,
                asset: [],
                success: false,
                error: true,
            }
        default:
            return state;
    }
}