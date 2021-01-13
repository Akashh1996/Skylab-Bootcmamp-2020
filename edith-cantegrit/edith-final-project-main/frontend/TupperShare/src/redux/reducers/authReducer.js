import actionTypes from '../actions/action-types';

const initialAuthState = { isLoggedIn: false };

export default function authReducer(state = initialAuthState, action) {
    let loading = '';
    switch(action.type) {
        case actionTypes.AUTH_SIGNUP:
            loading = {...state, registerLoading: true, createdUser: action.createdUser};
            break;
        case actionTypes.AUTH_SIGNUP_ERROR:
            loading = {...state, registerLoading:false, errorSignUp: action.errorSignUp};
            break;
        case actionTypes.AUTH_LOGIN:
            loading = {...state, isLoggedIn: true, loggedUser: action.loggedUser};
            break;
        case actionTypes.AUTH_LOGIN_ERROR:
            loading = {...state, errorLogin: action.errorLogin};
            break;
        case actionTypes.AUTH_SIGNOUT:
            loading = {...state, loggedOut: action.loggedOut};
            break;
        case actionTypes.AUTH_SIGNOUT_ERROR:
            loading = {...state, isLoggedIn: false, errorLogout: action.errorLogout};
            break;
        default:
            loading = state;
    }
    return loading
}

