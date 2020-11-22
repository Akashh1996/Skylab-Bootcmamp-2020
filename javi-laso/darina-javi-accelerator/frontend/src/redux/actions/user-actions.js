/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const serverUsersUrl = 'http://localhost:2130/users';

function githubLoginSuccess(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}

function githubLoginError(usersError) {
  return {
    type: actionTypes.LOAD_USER_ERROR,
    usersError,
  };
}

export default function githubLogin() {
  return async (dispatch) => {
    try {
      const user = await axios.get(serverUsersUrl);
      dispatch(githubLoginSuccess(user.data));
    } catch (error) {
      dispatch(githubLoginError(error));
    }
  };
}
