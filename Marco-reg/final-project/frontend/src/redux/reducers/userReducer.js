/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function userReducer(state = {}, action = {}) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOAD_USER:

      newState = { ...state, user: action.user };

      break;
    case actionTypes.LOAD_USER_ERROR:
      newState = { ...state, error: action.error };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
