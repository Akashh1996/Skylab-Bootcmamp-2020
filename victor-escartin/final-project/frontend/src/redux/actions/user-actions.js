import actionTypes from './actionTypes';

import { auth, firebase } from '../../Firebase/firebase';

export const userRegister = () => async (dispatch) => {
  dispatch({ type: actionTypes.USERS_REGISTER_REQUEST });
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const data = await auth.signInWithPopup(provider);

    localStorage.setItem('user', JSON.stringify({
      uid: data.user.uid,
      email: data.user.email,
      displayName: data.user.displayName,
    }));
    dispatch({
      type: actionTypes.USERS_REGISTER_SUCCESS,
      payload: {
        uid: data.user.uid,
        email: data.user.email,
        displayName: data.user.displayName,
      },
    });
  } catch (error) {
    dispatch({ type: actionTypes.USERS_REGISTER_FAIL, payload: error.message });
  }
};

export const readActiveUser = () => (dispatch) => {
  if (localStorage.getItem('user')) {
    dispatch({
      type: actionTypes.USERS_REGISTER_SUCCESS,
      payload: JSON.parse(localStorage.getItem('user')),
    });
  }
};

export const signOutUser = () => (dispatch) => {
  auth.signOut();
  localStorage.removeItem('user');
  dispatch({
    type: actionTypes.SIGN_OUT_SUCCESS,
  });
};
