import consts from '../../consts';

const user_key = consts.USER_KEY;
const ls = JSON.parse(localStorage.getItem(user_key));

const INITIAL_STATE = {
    // user: { email: 'elizeu.madeira@gmail.com', password: 'whatever', lembrar_senha: true },
    user:  {...ls.user, password: ''},
    token: ls.access_token,
    valid_token: ls.access_token != ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGGEDIN':
            // const payload = JSON.stringify(action.payload);
            console.log(action.payload);
            localStorage.setItem(user_key, JSON.stringify(action.payload));
            return {
                ...state,
                valid_token: true,
                token: payload.access_token,
                user: {...payload.user, password: ''},
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