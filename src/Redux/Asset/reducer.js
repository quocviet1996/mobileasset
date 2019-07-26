import { ASSET_REQUEST } from './actionTypes';
import { ASSET_SUCCESS } from './actionTypes';
import { ASSET_FAILURED } from './actionTypes';
const initialState = {
    asset: [],
    success: false,
    error: false,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case "ASSET_REQUEST":
            return {
                ...state,
                success: false,
                error: false,
            }
        case "ASSET_SUCCESS":
            return {
                ...state,
                asset: action.asset,
                success: true,
                error: false,
            }
        case "ASSET_FAILURED":
            return {
                ...state,
                asset: [],
                success: false,
                error: true
            }
        default:
            return state;

    }
}