import actionTypes from '../actions/action-types';

export default function listReducer(state = [], action) {
  let response = {};
  switch (action.type) {
    case actionTypes.GET_TVSHOW:
      response = { ...state, tvShows: action.tvShows };
      break;

    default:
      return state;
  }
  return response;
}
