import axios from 'axios';
import actionTypes from './actionTypes';

const backURL = 'http://localhost:5000/users/';

export function requestUsersListSuccess(usersList) {
  return {
    type: actionTypes.LOAD_USERS,
    usersList,
  };
}

export function requestUsersListError(error) {
  return {
    type: actionTypes.LOAD_USERS_ERROR,
    error,
  };
}

export function requestCreateUsersSuccess(newUser) {
  return {
    type: actionTypes.NEW_USERS,
    newUser,
  };
}

export function requestCreateUsersError(error) {
  return {
    type: actionTypes.NEW_USERS_ERROR,
    error,
  };
}

export function requestUsersList() {
  return async (dispatch) => {
    try {
      const usersList = await axios.get(backURL);
      dispatch(requestUsersListSuccess(usersList.data));
    } catch (error) {
      dispatch(requestUsersListError(error));
    }
  };
}

export function requestCreateUsers(user) {
  return async (dispatch) => {
    try {
      const newUser = await axios.post(backURL, { user });
      dispatch(requestCreateUsersSuccess(newUser.data));
    } catch (error) {
      dispatch(requestCreateUsersError(error));
    }
  };
}
