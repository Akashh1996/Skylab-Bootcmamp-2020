/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function projectReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      return action.projects;
    case actionTypes.LOAD_PROJECT:
      return action.project;
    case actionTypes.LOAD_LOGIN:
      return action.login;
    case actionTypes.LOAD_LOGIN_ERROR:
      return action.errorlogin;

    default:
      return state;
  }
}
