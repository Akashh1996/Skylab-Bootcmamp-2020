/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function listReducer(state = {}, action = {}) {
  let newState = null;

  switch (action.type) {
    case actionTypes.LOAD_SPOTS:

      newState = { ...state, spots: action.list };

      break;
    case actionTypes.LOAD_SPOTS_ERROR:
      newState = { ...state, error: action.error };
      break;

    default:
      newState = state;
      break;
  }
  return newState;
}
