import {
    CHECK_SCANNED_REQUEST,
    CHECK_SCANNED_SUCCESS,
    CHECK_SCANNED_FAILURED
} from './actionType';
import {checkScannedAsset}from '../../services/api';

const checkScannedRequest = () => {
    return {
        type: CHECK_SCANNED_REQUEST
    }
}

const checkScannedSuccess = (data) => {
    return {
        type: CHECK_SCANNED_SUCCESS,
        data
    }
}
const checkScannedFailured = () => {
    return {
        type: CHECK_SCANNED_FAILURED
    }
}
const checkScannedAction = (data) => {
    return (dispatch) => {
        dispatch(checkScannedRequest);
        return checkScannedAsset(data)
            .then((value) => {
                if (value.data.data) {
                    dispatch(checkScannedSuccess(value.data.data))
                }
                else {
                    dispatch(checkScannedFailured)
                }
            }).catch((error) => {
                dispatch(checkScannedFailured)
            })
    }
}
export default checkScannedAction;