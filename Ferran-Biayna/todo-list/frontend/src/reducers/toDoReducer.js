import actionTypes from '../actions/actionTypes';

let answer = null;

export default function toDoReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      answer = { ...state, list: action.list };
      return answer;
    case actionTypes.LOAD_LIST_ERROR:
      answer = { ...state, error: action.error };
      return answer;
    case actionTypes.ADD_ITEM:
      answer = { ...state, list: [...state.list, action.item] };
      return answer;
    case actionTypes.ADD_ITEM_ERROR:
      answer = { ...state };
      return answer;
    case actionTypes.UPDATE_ITEM:
      answer = { ...state, list: action.item };
      return answer;
    case actionTypes.ADD_UPDATE_ERROR:
      answer = { ...state };
      return answer;
    case actionTypes.DELETE_ITEM:
      answer = { ...state, list: action.item };
      return answer;
    case actionTypes.DELETE_ITEM_ERROR:
      answer = { ...state, error: action.error };
      return answer;
    default:
      return state;
  }
}
