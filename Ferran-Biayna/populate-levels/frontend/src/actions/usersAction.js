import axios from 'axios';
import actionTypes from './actionTypes';

const backURL = 'http://localhost:5000/users/';

function requestUsersListSuccess(usersList) {
  return {
    type: actionTypes.LOAD_USERS,
    usersList,
  };
}

function requestUsersListError(error) {
  return {
    type: actionTypes.LOAD_USERS_ERROR,
    error,
  };
}

function requestUsersList() {
  return async (dispatch) => {
    try {
      const usersList = await axios.get(backURL);
      dispatch(requestUsersListSuccess(usersList.data));
    } catch (error) {
      dispatch(requestUsersListError(error));
    }
  };
}

export default requestUsersList;
