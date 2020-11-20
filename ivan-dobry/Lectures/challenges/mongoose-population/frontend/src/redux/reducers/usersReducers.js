import actionTypes from '../actions/actionTypes';

export default function usersReducers(state = {}, action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_USERS: {
      const users = { ...state, usersArray: action.usersList };
      return users;
    }
    case actionTypes.LOAD_USERS_ERROR: {
      const users = { ...state, error: action.error };
      return users;
    }

    default:
      return state;
  }
}
