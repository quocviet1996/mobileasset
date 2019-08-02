import { ADD_ASSET_REQUEST, ADD_ASSET_SUCCESS, ADD_ASSET_FAILURED } from './actionType';
import { addAsset } from '../../services/api';

const addAssetRequest = () => {
    return {
        type: ADD_ASSET_REQUEST
    }
}

const addAssetSuccess = (asset,result) => {
    return {
        type: ADD_ASSET_SUCCESS,
        asset,
        result
    }
}

const addAssetFailured = () => {
    return {
        type: ADD_ASSET_FAILURED
    }
}
const addAssetAction = (data) => {
    return (dispatch) => {
        dispatch(addAssetRequest);
        return addAsset(data)
            .then((result) => {
                // console.log(result.data.result)
                if (result.data.result) {
                    dispatch(addAssetSuccess(result.data.data,result.data.result))
                }
                else {
                    dispatch(addAssetFailured())
                }
            }).catch((error) => {
                dispatch(addAssetFailured())
            })
    }
}
export default addAssetAction;
