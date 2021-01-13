import actionTypes from './actionTypes';
import signInWithGoogle from '../../firebase/signinWithGoogle';

function loginUserWithGoogleSuccess(user) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE,
    user,
  };
}

function loginUserWithGoogleError(loginError) {
  return {
    type: actionTypes.LOGIN_USER_GOOGLE_ERROR,
    loginError,
  };
}

export default function loginUserWithGoogle() {
  return async (dispatch) => {
    try {
      const { user } = await signInWithGoogle();

      dispatch(loginUserWithGoogleSuccess(user));
    } catch (loginError) {
      dispatch(loginUserWithGoogleError(loginError));
    }
  };
}
