/* eslint-disable no-debugger */
import actionTypes from './actionTypes';
import signinWithGoogle from '../../firebase/firebaseMethods';

function loginGoogleSuccess (user) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    user
  };
}

function loginGoogleError (loginError) {
  return {
    type: actionTypes.LOGIN_ERROR,
    loginError
  };
}

export function logoutGoogleSuccess () {
  return {
    type: actionTypes.LOGOUT_USER_GOOGLE
  };
}

export function logoutGoogleError (error) {
  return {
    type: actionTypes.LOGOUT_ERROR,
    error
  };
}

export function loginUserWithGoogle () {
  return async (dispatch) => {
    try {
      const user = await signinWithGoogle();
      dispatch(loginGoogleSuccess(user));
    } catch (loginError) {
      dispatch(loginGoogleError(loginError));
    }
  };
}
