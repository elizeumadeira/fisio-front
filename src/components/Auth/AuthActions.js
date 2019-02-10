import {
    toastr
} from 'react-redux-toastr';
import axios from 'axios';
import consts from '../../consts';

export function login(values) {
    return dispatch => {
        axios.post(`${consts.API_URL}/login`, values)
            .then(resp => {
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