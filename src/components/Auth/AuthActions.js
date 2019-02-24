import {
    toastr
} from 'react-redux-toastr';
import axios from 'axios';
import consts from '../../config/consts';

export function login(values) {
    return dispatch => {
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
    return {
        type: 'USER_LOGGEDOUT'
    }
}