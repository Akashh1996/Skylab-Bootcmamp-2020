import actionTypes from '../actions/action-types';

export default function userReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_USERS:
      return action.userList;

    default:
      return state;
  }
}
