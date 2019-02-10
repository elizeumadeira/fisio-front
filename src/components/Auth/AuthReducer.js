const user_key = '_fisio_auth_userauth';
const INITIAL_STATE = {
    user: null,
    token: null,
    valid_token: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'USER_LOGGEDIN':
            const payload = JSON.stringify(action.payload);
            return {
                ...action,
                valid_token: true,
                token: payload.token,
                user: payload.user,
            }
        case 'USER_LOGGEDOUT':
            return {
                ...INITIAL_STATE
            }
        default:
            return state;
    }
}