import actionTypes from '../actions/actionTypes';

export default function authReducer(state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOGIN_USER_GOOGLE:
      newState = { ...state, user: action.user };
      break;

    case actionTypes.LOGIN_USER_GOOGLE_ERROR:
      newState = { ...state, loginError: action.loginError };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
