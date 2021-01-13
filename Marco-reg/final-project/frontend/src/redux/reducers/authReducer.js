import actionTypes from '../actions/actionTypes';

export default function authReducer(state = {}, action = {}) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOGIN_USER_GOOGLE:
      newState = { ...state, user: action.user };
      break;
    case actionTypes.LOGIN_ERROR:
      newState = { ...state, loginError: action.loginError };
      break;
    case actionTypes.SIGNOUT_SUCCESS:
      newState = { ...state, user: null };
      break;
    case actionTypes.SIGNOUT_ERROR:
      newState = { ...state, signoutError: action.signoutError };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
