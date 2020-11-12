import actionTypes from '../actions/action-types';

export default function heroReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.GET_HERO:
      return action.hero;
    default:
      return state;
  }
}
