import { CHECK_SCANNED_REQUEST, CHECK_SCANNED_SUCCESS, CHECK_SCANNED_FAILURED, CHANGE_IS_SCANNED } from './actionType';
const initialState = {
    data: [],
    success: false,
    error: false,
    isScanned: false,
}
export default (state = initialState, action) => {
    switch (action.type) {
        case CHECK_SCANNED_REQUEST:
            return {
                ...state,
            }
        case CHECK_SCANNED_SUCCESS:
            return {
                ...state,
                data: action.data,
                success: true,
                error: false
            }
        case CHECK_SCANNED_FAILURED:
            return {
                ...state,
                data: [],
                success: false,
                error: true,
            }
        case CHANGE_IS_SCANNED:
            return {
                ...state,
                isScanned: true
            }
        default:
            return state;
    }
}