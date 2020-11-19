/* eslint-disable no-debugger */
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

export default function requestUsers() {
  debugger;
  return async (dispatch) => {
    try {
      debugger;
      const users = await axios.get(URL);
      dispatch(requestUsersSuccess(users.data));
    } catch (error) {
      dispatch(requestUsersError(error));
    }
  };
}
