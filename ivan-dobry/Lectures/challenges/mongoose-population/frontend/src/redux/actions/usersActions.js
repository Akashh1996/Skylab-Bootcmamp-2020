/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestUsersSucces(usersList) {
  debugger;
  return {
    type: actionTypes.LOAD_USERS,
    usersList,
  };
}

function requestUsersError(error) {
  return {
    type: actionTypes.LOAD_USERS_ERROR,
    error,
  };
}

export function requestUsers() {
  debugger;
  return async (dispatch) => {
    const endpoint = 'http://localhost:1970/';
    debugger;
    try {
      const users = await axios.get(endpoint);

      dispatch(requestUsersSucces(users.data));
    } catch (error) {
      dispatch(requestUsersError);
    }
  };
}

export function createUserSucces(newUser) {
  debugger;
  return {
    trype: actionTypes.CREATE_USer,
    newUser,
  };
}

export function createUser() {
  debugger;
  return async (dispatch) => {
    try {
      const user = await axios.put('http://localhost:1970/');
      dispatch(createUserSucces(user.data));
    } catch (error) {
      console.log(error);
    }
  };
}
