/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const oauthUrl = 'http://localhost:2130/oauth-callback';

export function getUserSuccess(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}

export function getUserError(error) {
  return {
    type: actionTypes.LOAD_USER_ERROR,
    error,
  };
}

export function getUserFromGithub(code) {
  return async (dispatch) => {
    try {
      const user = await axios.get(oauthUrl, { params: { code } });

      dispatch(getUserSuccess(user.data));
    } catch (error) {
      dispatch(getUserError(error));
    }
  };
}

export function logOutUser() {
  return {
    type: actionTypes.USER_LOGOUT,
  };
}
