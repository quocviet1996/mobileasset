import {
    CHECK_SCANNED_REQUEST,
    CHECK_SCANNED_SUCCESS,
    CHECK_SCANNED_FAILURED,
    CHANGE_IS_SCANNED
} from './actionType';
import { checkScannedAsset, changeScannedAsset } from '../../services/api';

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
const changeIsScanned = () => {
    return {
        type: CHANGE_IS_SCANNED
    }
}
export const changeScanned = (data) => {
    return (dispatch) => {
        dispatch(checkScannedRequest);
        return changeScannedAsset(data)
            .then((value) => {
                if (value.data.data == 1) {
                    dispatch(changeIsScanned())


                }
            })
    }

}
const checkScannedAction = (data) => {
    return (dispatch) => {
        dispatch(checkScannedRequest);
        return checkScannedAsset(data)
            .then((value) => {
                console.log(value)
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