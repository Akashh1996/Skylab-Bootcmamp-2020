import axios from 'axios';
import * as Google from 'expo-google-app-auth';
import actionTypes from './ActionTypes';

// homeIp: 'http://192.168.1.134:1240'
// skylabIp: 'http://192.168.0.61:1240'

function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

export function loadUserSuccess(user) {
  return {
    type: actionTypes.LOAD_USER,
    user,
  };
}

export function loadUser(userId) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/user';
    try {
      const { data } = await axios.get(endpoint, { params: { userId } });
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function setUserId(userId) {
  return {
    type: actionTypes.LOAD_USER_ID,
    userId,
  };
}

export function updateUser(userId, updatedUser) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/user';
    try {
      const { data } = await axios.patch(endpoint, { userId, updatedUser });
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function deleteUser(userId) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/user';
    try {
      await axios.delete(endpoint, { params: userId });
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

async function signInWithGoogle() {
  try {
    const result = await Google.logInAsync({
      androidCliendId: '37347811454-725scavgpomj1sst73qd614scdoitmot.apps.googleusercontent.com',
      iosClientId: '37347811454-f21pooncuuhr4t83ego1ernhshq9isof.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    return result;
  } catch (error) {
    console.log(error);
  }
}

export function loginGoogle() {
  return async (dispatch) => {
    try {
      const endpoint = 'http://192.168.1.129:1240/user';
      const { user } = await signInWithGoogle();
      const { data } = await axios.post(endpoint, user);
      dispatch(loadUserSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
