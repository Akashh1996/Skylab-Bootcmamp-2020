import actionTypes from '../actions/actionTypes';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_USER:
      return { ...state, user: action.user, isLogged: true };
    case actionTypes.LOAD_USER_ERROR:
      return { ...state, errorUser: action.userError };
    case actionTypes.USER_LOGOUT:
      return { ...state, user: null, isLogged: false };
    default:
      return state;
  }
}
