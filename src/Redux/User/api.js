import axios from 'axios';
import { Body } from 'native-base';
export async function SignInRequest(username, password) {
    try {
        const response = await fetch("http://10.0.3.240:3000/user/login",{
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                username,
                password
            })
            
        })
        const responseJson = await response.json();
        console.log(responseJson)
        // const response = await axios.post('http://10.0.3.240:3000/user/login', {
        //     username: username,
        //     password: password
        // })
        // await console.log(response);
    }
    catch (error) {
        console.log(error);
    }

}