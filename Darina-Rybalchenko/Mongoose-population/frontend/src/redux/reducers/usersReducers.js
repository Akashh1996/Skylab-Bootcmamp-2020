/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function usersReducer(state = {}, action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_USER:
      const loadUsers = { ...state, users: action.users };
      return loadUsers;
    case actionTypes.LOAD_USER_ERROR:
      const userError = { ...state, errorUser: action.usersError };
      return userError;
    default:
      return state;
  }
}
