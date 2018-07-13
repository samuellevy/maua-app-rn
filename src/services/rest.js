import { AsyncStorage } from 'react-native';

var rest = {
    // url: 'http://192.168.2.71/rest/api',
    baseURL: 'http://dev2.3aww.com.br/lafargemaua/api',
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
    async post(action, body){
        const token = await AsyncStorage.getItem("@CodeApi:token");
        var url = this.url + action;
        var object = {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            //   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMsImV4cCI6MTUzMTQyMjk4MH0.pVB4W3Y8xlBjX_bdyVai-h_P54AuIlv08W9Cle246d8'
            },
            body: body,
        };
        if(token) object.headers['Authorization'] = `Bearer ${token}`;
        return fetch(url, object).then((res) => res.json());
    },
};

export default rest;

/**
 * Post with bidemensional array
let answers = JSON.stringify({
    answers:[
        {
            question_id:1,
            value: 2,
        },
        {
            question_id:1,
            value: 2,
        }
    ]
});
 */