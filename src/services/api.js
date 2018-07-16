import { AsyncStorage } from 'react-native';
import { create } from  'apisauce';

const api = create({
    baseURL: 'http://192.168.2.71/rest/api',
    // baseURL: 'http://dev2.3aww.com.br/lafargemaua/api',
    // baseURL: 'http://192.168.0.27/lafarge-backend/api',
});

api.addAsyncRequestTransform(request => async () => {
    const token = await AsyncStorage.getItem('@CodeApi:token');
    if(token) request.headers['Authorization'] = `Bearer ${token}`;
})

api.addResponseTransform(response => {
    if(!response.ok) throw response;
});

export default api;