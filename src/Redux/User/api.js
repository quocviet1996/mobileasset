import axios from 'axios';
import { SIGN_IN ,GET_ASSET_ID} from '../../ultil/api';
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
export function getAssetWithUserId (userId) {
    try{
        const response = axios.post(GET_ASSET_ID,{
            userId
        })
        return response;
    }
    catch(error){
        console.log(error);
    }
}
