import {
    ASSET_REQUEST,
    ASSET_SUCCESS,
    ASSET_FAILURED
} from './actionTypes';
import { getAssetWithUserId, AssetPull } from '../User/api';
const assetRequest = () => {
    return {
        type: ASSET_REQUEST
    }
}
const assetSuccess = (asset) => {
    return {
        type: ASSET_SUCCESS,
        asset
    }

}
const assetFailured = () => {
    return {
        type: ASSET_FAILURED
    }
}
export const assetPull = (asset) => {
    return (dispatch) => {
        dispatch(assetRequest);
        return AssetPull(asset)
            .then((asset) => {
                if (asset.data.asset) {
                    dispatch(assetSuccess(asset.data.asset))
                }
                else {
                    dispatch(assetFailured())
                }
            }).catch((error) => {
                dispatch(assetFailured)
            })
    }

}
const assetAction = (asset) => {
    return (dispatch) => {
        dispatch(assetRequest);
        return getAssetWithUserId(asset)
            .then((asset) => {
                if (asset.data.asset) {
                    dispatch(assetSuccess(asset.data.asset))
                }
                else {
                    dispatch(assetFailured())
                }
            })
            .catch((error) => {
                dispatch(assetFailured)
            })
    }
}
export default assetAction;