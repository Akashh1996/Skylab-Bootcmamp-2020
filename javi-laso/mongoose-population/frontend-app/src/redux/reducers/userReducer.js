import actionTypes from '../actions/action-types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return action.userList;
    case actionTypes.CREATE_USER:
      return [...state, action.newUser];

    default:
      return state;
  }
}
