import consts from '../../consts';

const user_key = consts.USER_KEY;
const ls = JSON.parse(localStorage.getItem(user_key));

const INITIAL_STATE = {
    // user: { email: 'elizeu.madeira@gmail.com', password: 'whatever', lembrar_senha: true },
    user:  ls.user,
    token: ls.access_token,
    valid_token: ls.access_token != ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGGEDIN':
            // const payload = JSON.stringify(action.payload);
            localStorage.setItem(user_key, JSON.stringify(action.payload));
            return {
                ...action,
                valid_token: true,
                token: payload.token,
                user: payload.user,
            }
        case 'USER_LOGGEDOUT':
            localStorage.removeItem(user_key);
            return {
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}