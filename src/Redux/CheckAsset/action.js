import {
    CHECK_ASSET_EXISTS,
    CHECK_ASSET_EXISTS_SUCCESS,
    CHECK_ASSET_EXISTS_FAILURED
} from './actionTypes';
import { checkAssetWithSerialNumber } from '../User/api';
const checkAsset = () => {
    return {
        type: CHECK_ASSET_EXISTS
    }
}

const checkAssetSuccess = (asset) => {
    return {
        type: CHECK_ASSET_EXISTS_SUCCESS,
        asset
    }
}
const checkAssetFailured = () => {
    return {
        type: CHECK_ASSET_EXISTS_FAILURED
    }
}
const checkAssetAction = (checkData) => {
    // console.log(serialNumber)
    return (dispatch) => {
        console.log(checkData)
        dispatch(checkAsset);
        return checkAssetWithSerialNumber({serialNumber:checkData.serialNumber,userId:checkData.userId})
        .then((asset) =>{
            // console.log(asset)
            if (asset.data.asset){
                dispatch(checkAssetSuccess(asset.data.asset))
            }
            else{
                dispatch(checkAssetFailured())
            }
        })
        .catch((error) =>{
            dispatch(checkAssetFailured)
        })
    }
}
export default checkAssetAction;