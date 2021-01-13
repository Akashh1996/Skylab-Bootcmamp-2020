import actionTypes from '../actions/actionTypes';

export default function userReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        user: action.user,
        isLogged: true,
      };
    case actionTypes.AUTH_LOGIN_ERROR:
      return {
        ...state,
        errorUser: action.errorUser,
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        isLogged: false,
      };
    case actionTypes.ADD_USER:
      return {
        ...state,
        user: action.newUser,
      };
    case actionTypes.LOAD_USER_QUESTION:
      return {
        ...state,
        userQuestion: action.userQuestion,
      };
    default:
      return state;
  }
}
