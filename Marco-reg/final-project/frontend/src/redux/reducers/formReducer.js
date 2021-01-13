/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

export default function formReducer(state = {}, action = {}) {
  let newState = null;
  switch (action.type) {
    case actionTypes.CREATE_PROJECT:

      newState = { ...state, info: action.newProject };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
