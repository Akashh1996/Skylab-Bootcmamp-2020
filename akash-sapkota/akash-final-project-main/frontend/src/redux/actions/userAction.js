import './Firebase/firebaseIndex';
import axios from 'axios';
import firebase from 'firebase';
import actionTypes from './actionTypes';

const serverUsersUrl = 'https://code-flow.herokuapp.com/users';

export function addUserSuccess(newUser) {
  return {
    type: actionTypes.ADD_USER,
    newUser,
  };
}
export function addUserError(error) {
  return {
    type: actionTypes.ADD_USER_ERROR,
    error,
  };
}
export function addUser(userData) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(serverUsersUrl, userData);
      localStorage.user = JSON.stringify({ user: { ...data } });
      dispatch(addUserSuccess(data));
    } catch (error) {
      dispatch(addUserError(error));
    }
  };
}

export function handleSignInSuccess(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user,
  };
}
export function handleSignOutSuccess() {
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
}
export function handleSignInError(error) {
  return {
    type: actionTypes.AUTH_LOGIN_ERROR,
    error,
  };
}
export function handleSignOutError(error) {
  return {
    type: actionTypes.AUTH_LOGOUT_ERROR,
    error,
  };
}
export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  return async (dispatch) => {
    try {
      const result = await firebase.auth().signInWithPopup(provider);
      const { user } = result;
      dispatch(handleSignInSuccess(user));
      dispatch(addUser({
        displayName: result.additionalUserInfo.profile.name,
        photo: result.additionalUserInfo.profile.picture,
        email: result.additionalUserInfo.profile.email,
      }));
    } catch (error) {
      dispatch(handleSignInError(error));
    }
  };
}
export function signOut() {
  return async (dispatch) => {
    try {
      localStorage.removeItem('user');
      await firebase.auth().signOut();
      dispatch(handleSignOutSuccess());
    } catch (error) {
      dispatch(handleSignOutError(error));
    }
  };
}

function loadUserQuestionSuccess(userQuestion) {
  return {
    type: actionTypes.LOAD_USER_QUESTION,
    userQuestion,
  };
}
function loadUserQuestionError(error) {
  return {
    type: actionTypes.LOAD_USER_QUESTION_ERROR,
    error,
  };
}

export function loadUserQuestion(userId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://code-flow.herokuapp.com/questions/${userId}`);
      dispatch(loadUserQuestionSuccess(data));
    } catch (error) {
      dispatch(loadUserQuestionError(error));
    }
  };
}
