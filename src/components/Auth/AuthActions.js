import {
    toastr
} from 'react-redux-toastr';
import axios from 'axios';
import consts from '../../consts';

export function login(values) {
    return dispatch => {
        axios.post(`${consts.API_URL}/login`, {
            email: values.email, password: values.password
        }).then(resp => {
                dispatch({
                    type: 'USER_LOGGEDIN',
                    payload: resp.data
                });
            })
            .catch(e => {
                e.response.data.errors.array.forEach(error => toastr.error('Erro', error));
            });
    }
}

export function logout(){
    return dispatch => (
        dispatch({
            type: 'USER_LOGGEDOUT'
        })
    )
}