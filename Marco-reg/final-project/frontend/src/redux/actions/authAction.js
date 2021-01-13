/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';
import signinWithGoogle from '../../firebase/firebaseMethod';

function loginGoogleSuccess(user) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE, user,
  };
}

function LoginGoogleError(loginError) {
  return {
    type: actionTypes.LOGIN_ERROR, loginError,
  };
}

export function signoutUser() {
  return {
    type: actionTypes.SIGNOUT_SUCCESS,
  };
}

export function loginUserWithGoogle() {
  return async (dispatch) => {
    try {
      const { user } = await signinWithGoogle();
      const checkUser = await axios.put('http://localhost:3020/user/', { user });

      dispatch(loginGoogleSuccess(checkUser.data));
    } catch (loginError) {
      dispatch(LoginGoogleError(loginError));
    }
  };
}
