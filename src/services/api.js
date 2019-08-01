import axios from 'axios';
import {
    SIGN_IN,
    GET_ASSET_ID,
    CHECK_ASSET_SERIALNUMBER,
    ASSET_PULL_TO_REFRESH,
    CHECK_SCANNED,
    CHANGE_ISSCANNED
} from '../ultil/api';
export function SignInRequest(UserInfo) {
    try {
        const response = axios.post(SIGN_IN, {
            username: UserInfo.username,
            password: UserInfo.password
        })
        return response;
    }
    catch (error) {
        console.log(error);
    }

}
export function getAssetWithUserId(asset) {
    try {
        const response = axios.post(GET_ASSET_ID, {
            userId: asset.userId,
            pageIndex: asset.pageIndex,
            pageSize: asset.pageSize
        })
        return response;
    }
    catch (error) {
        console.log(error);
    }
}
export function checkAssetWithSerialNumber(checkData) {
    try {
        const response = axios.post(CHECK_ASSET_SERIALNUMBER, {
            serialnumber: checkData.serialNumber,
            userId: checkData.userId
        })
        return response;
    }
    catch (error) {
        console.log(error);
    }
}
export function AssetPull(data) {
    try {
        const response = axios.post(ASSET_PULL_TO_REFRESH, {
            userId: data.userId,
            pageIndex: data.pageIndex,
            pageSize: data.pageSize
        })
        return response;

    }
    catch (error) {
        console.log(error)
    }
}
export function checkScannedAsset(data) {
    try {
        const response = axios.post(CHECK_SCANNED, {
            id: data.id
        })
        return response;
    }
    catch (error) {
        console.log(error)
    }
}
export function changeScanned(data) {
    try {
        const resposne = axios.post(CHANGE_ISSCANNED,{
            id:data.id
        })
        console.log(resposne)
        return resposne;
    }
    catch (error) {
        console.log(error)
    }
}
