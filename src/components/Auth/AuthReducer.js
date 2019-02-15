import consts from '../../consts';

const user_key = consts.USER_KEY;
const ls = JSON.parse(localStorage.getItem(user_key)) || {
    user: {
        email: '',
        password: '',
        lembrar_senha: true
    },
    access_token: '',
    valid_token: false
};

const INITIAL_STATE = {
    // user: { email: 'elizeu.madeira@gmail.com', password: 'whatever', lembrar_senha: true },
    user:  {...ls.user, password: ''},
    token: ls.access_token||'', 
    valid_token: ls.access_token != '' || false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGGEDIN':
            localStorage.setItem(user_key, JSON.stringify(action.payload));
            return {
                ...state,
                valid_token: true,
                token: action.payload.access_token,
                user: {...action.payload.user, password: ''},
            }
        case 'USER_LOGGEDOUT':
            localStorage.removeItem(user_key);
            return {
                ...state,
                user: {},
                token: '',
                valid_token: false
            }
        default:
            return state;
    }
}