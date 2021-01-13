import actionTypes from '../actions/actionTypes';

export default function usersReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return { ...state, user: action.user, isLogged: true };
    case actionTypes.AUTH_LOGIN_ERROR:
      return { ...state, errorUser: action.userError };
    case actionTypes.AUTH_SIGNOUT:
      return { ...state, user: null, isLogged: false };
    case actionTypes.AUTH_SIGNOUT_ERROR:
      return { ...state, errorUser: action.userError };
    case actionTypes.SAVE_USER:
      return { ...state, user: action.user, isLogged: true };
    case actionTypes.ADD_USER:
      return { ...state, user: action.user, isLogged: false };
    case actionTypes.ADD_USER_ERROR:
      return { ...state, errorUser: action.userError };
    case actionTypes.CREATE_BOOKING:
      return { ...state, user: action.user };
    case actionTypes.CREATE_BOOKING_ERROR:
      return { ...state, errorUser: action.userError };
    case actionTypes.FETCH_USER:
      return { ...state, user: action.user };
    case actionTypes.FETCH_USER_ERROR:
      return { ...state, errorUser: action.userError };

    default:
      return state;
  }
}
