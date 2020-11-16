/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function heroReducer(state = [], action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_HERO:
      return action.data;
    case actionTypes.ADD_HERO:
      return [...state, action.hero];
    case actionTypes.DELETE_HERO:
      return action.heroes;
    default:
      return state;
  }
}
