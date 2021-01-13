/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function spotReducer(state = {}, action = {}) {
  let newState = null;

  switch (action.type) {
    case actionTypes.LOAD_SPOT:
      newState = { ...state, spot: action.spot };
      break;
    case actionTypes.LOAD_SPOT_ERROR:
      newState = { ...state, error: action.error };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
