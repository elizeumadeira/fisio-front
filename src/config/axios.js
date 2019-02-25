import store from './store';
import '../components/Auth/AuthActions';
import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // insere o token para todas as chamadas de api
    if (store.getState().auth.valid_token) {
        config.headers.Authorization = 'Bearer ' + store.getState().auth.token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    if(error.response.status == 401){
        const {dispatch} = store;
        dispatch({
            type: 'USER_LOGGEDOUT'
        });
    }
    console.log('axios error', error.response.status);

    // Do something with response error
    return Promise.reject(error);
});

export default axios;