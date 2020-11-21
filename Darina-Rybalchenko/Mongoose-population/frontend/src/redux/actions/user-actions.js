import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:1800/users';

function requestUsersSuccess(users) {
  return {
    type: actionTypes.LOAD_USER,
    users,
  };
}

function requestUsersError(usersError) {
  return {
    type: actionTypes.LOAD_USER_ERROR,
    usersError,
  };
}

export function requestUsers() {
  return async (dispatch) => {
    try {
      const users = await axios.get(URL);
      dispatch(requestUsersSuccess(users.data));
    } catch (error) {
      dispatch(requestUsersError(error));
    }
  };
}

function createUserSuccess(newUser) {
  return {
    type: actionTypes.CREATE_USER,
    newUser,
  };
}

function createUserError(newUserError) {
  return {
    type: actionTypes.CREATE_USER_ERROR,
    newUserError,
  };
}

export function createUser(newUser) {
  return async (dispatch) => {
    try {
      const newAddedUser = await axios.put(URL, newUser);
      dispatch(createUserSuccess(newAddedUser.data));
    } catch (error) {
      dispatch(createUserError(error));
    }
  };
}
