import actionTypes from '../actions/actionTypes';

export default function toDoReducer(state = {}, action) {
  let answer = state;
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      answer = { ...state, usersList: action.usersList };
      break;
    case actionTypes.LOAD_USERS_ERROR:
      answer = { ...state, error: action.error };
      break;
    case actionTypes.NEW_USERS:
      answer = { ...state, usersList: action.usersList };
      break;
    case actionTypes.NEW_USERS_ERROR:
      answer = { ...state, error: action.error };
      break;
    default:
      answer = state;
  }
  return answer;
}
