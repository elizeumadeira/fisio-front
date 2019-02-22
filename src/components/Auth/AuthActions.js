import React from 'react';
import {
    Redirect
} from "react-router-dom";
import {
    toastr
} from 'react-redux-toastr';
import axios from 'axios';
import consts from '../../consts';

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export function login(values) {
    return dispatch => {
        // console.log(axios.defaults.headers);
        return axios.post(`${consts.API_URL}/login`, {
                email: values.email,
                password: values.password
            }).then(resp => {
                dispatch({
                    type: 'USER_LOGGEDIN',
                    payload: resp.data
                });
            })
            .catch(e => {
                console.log('erro', e);
                toastr.error('Erro', e.response.data.status);
                // e.response.data.errors.array.forEach(error => toastr.error('Erro', error));
            });
    }
}

export function logout() {
    return dispatch => (
        dispatch({
            type: 'USER_LOGGEDOUT'
        })
    )
}