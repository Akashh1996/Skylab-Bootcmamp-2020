import axios from 'axios';
import actionTypes from './actionTypes';

const userURL = 'http://localhost:5000/users';

export function loadUserSuccess(userList) {
  return {
    type: actionTypes.LOAD_USERS,
    userList,
  };
}

export function loadUsers() {
  return async (dispatch) => {
    try {
      const users = await axios.get(userURL);

      dispatch(loadUserSuccess(users.data));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}
