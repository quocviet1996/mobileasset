import axios from 'axios';
import { Body } from 'native-base';
import { SIGN_IN } from '../../ultil/api';
export function SignInRequest(username, password) {
    try {
        const response = axios.post(SIGN_IN, {
            username: username,
            password: password
        })
        return response;
    }
    catch (error) {
        console.log(error);
    }

}
