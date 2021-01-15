import axios from 'axios';
import actionTypes from './action-types';

const usersUrl = 'http://localhost:3500/';

export function loadUsersSuccess(userList) {
  return {
    type: actionTypes.LOAD_USERS,
    userList,
  };
}

export function loadUsersError(error) {
  return {
    type: actionTypes.LOAD_USERS_ERROR,
    error,
  };
}

export function loadUsers() {
  return async (dispatch) => {
    try {
      const users = await axios.get(usersUrl);

      dispatch(loadUsersSuccess(users.data));
    } catch (error) {
      dispatch(loadUsersError(error));
    }
  };
}

export function createUserSuccess(newUser) {
  return {
    type: actionTypes.CREATE_USER,
    newUser,
  };
}

export function createUserError(error) {
  return {
    type: actionTypes.CREATE_USER_ERROR,
    error,
  };
}

export function createUser(newUser) {
  return async (dispatch) => {
    // eslint-disable-next-line no-debugger
    debugger;
    try {
      const user = await axios.put(usersUrl, newUser);

      dispatch(createUserSuccess(user.data));
    } catch (error) {
      dispatch(createUserError(error));
    }
  };
}
