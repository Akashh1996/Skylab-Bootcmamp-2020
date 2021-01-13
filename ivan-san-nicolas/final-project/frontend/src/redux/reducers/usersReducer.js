import actionTypes from '../actions/ActionTypes';

export default function usersReducer(state = {}, action) {
  let newState = null;

  switch (action.type) {
    case actionTypes.LOAD_USER:
      newState = { ...state, userItem: action.user };
      break;

    case actionTypes.LOAD_USER_ID:
      newState = { ...state, userId: action.userId };
      break;

    case actionTypes.LOAD_ERROR:
      newState = { ...state, error: action.error };
      break;

    default:
      newState = { ...state };
      break;
  }

  return newState;
}
