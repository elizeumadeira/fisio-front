import store from './store';
import axios from 'axios';

export default axios.interceptors.request.use(function (config) {
    // insere o token para todas as chamadas de api
    if(store.getState().auth.valid_token){
        config.headers.Authorization = 'Bearer ' + store.getState().auth.token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});