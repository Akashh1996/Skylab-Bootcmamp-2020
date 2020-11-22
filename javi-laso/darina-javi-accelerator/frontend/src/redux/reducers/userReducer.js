import actionTypes from '../actions/actionTypes';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return { ...state, user: action.user, isLogged: true };
    case actionTypes.LOAD_USER_ERROR:
      const loadUserError = { ...state, errorUser: action.userError };
      return loadUserError;
    default:
      return state;
  }
}
