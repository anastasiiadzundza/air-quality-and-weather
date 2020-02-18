import axios from 'axios';

 export default function utils() {
    const instance = axios.create({
        baseURL: 'https://api.airvisual.com/v2/',
        timeout: 1000,
    });


    const get = url => instance.get(url);

     //const get = url => fetch(`${url}`);
    
    return {
        get,
    }
}


