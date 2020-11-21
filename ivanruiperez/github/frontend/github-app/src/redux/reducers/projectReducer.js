/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function projectReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      return action.projects;

    default:
      return state;
  }
}
