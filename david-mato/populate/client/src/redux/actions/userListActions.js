import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:7000/users/';

export function requestUserListSuccess(userList) {
  return {
    type: actionTypes.LOAD_USERLIST,
    userList,
  };
}

export function requestUserListError(error) {
  return {
    type: actionTypes.LOAD_USERLIST_ERROR,
    error,
  };
}

export function requestUserList() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);
      dispatch(requestUserListSuccess(data));
    } catch (error) {
      dispatch(requestUserListError(error));
    }
  };
}
