/* eslint-disable import/prefer-default-export */
/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestUserInfo(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}

function requestUserError(error) {
  return {
    type: actionTypes.LOAD_USER_ERROR, error,
  };
}

export function requestUser(userId) {
  return async (dispatch) => {
    const endpoint = `http://localhost:3020/user/${userId}`;
    try {
      const user = await axios.get(endpoint, { userId });

      dispatch(requestUserInfo(user.data));
    } catch (error) {
      dispatch(requestUserError(error));
    }
  };
}
