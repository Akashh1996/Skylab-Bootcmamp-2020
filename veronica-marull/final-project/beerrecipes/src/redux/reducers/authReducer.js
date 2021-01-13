import actionTypes from '../actions/actionTypes';

export default function authReducer (state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOGIN_USER_GOOGLE:
      newState = { ...state, user: action.user };
      break;

    case actionTypes.LOGOUT_USER_GOOGLE:
      newState = { ...state, user: null };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
