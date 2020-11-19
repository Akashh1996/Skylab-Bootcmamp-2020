import axios from 'axios';
import actionTypes from './action-types';

const usersUrl = 'http://localhost:3500/';

export function loadUsersSuccess(userList) {
  return {
    type: actionTypes.LOAD_USERS,
    userList,
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const users = await axios.get(usersUrl);

    dispatch(loadUsersSuccess(users.data));
  };
}
