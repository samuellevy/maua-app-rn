import { AsyncStorage } from 'react-native';

var rest = {
    url: 'http://192.168.2.71/rest/api',
    async get(action){
        const token = await AsyncStorage.getItem("@CodeApi:token");
        var url = this.url + action;
        var options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        };
        if(token) options.headers['Authorization'] = `Bearer ${token}`;
        return fetch(url, options).then((res) => res.json());
    },
    post(){
        
    }
};

export default rest;