import actionTypes from '../actions/actionTypes';

export default function toDoReducer(state = {}, action) {
  let answer = state;
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      answer = { ...state, list: action.listToDo };
      break;
    case actionTypes.LOAD_LIST_ERROR:
      answer = { ...state, error: action.error };
      break;
    case actionTypes.ADD_ITEM:
      answer = { ...state, list: [...state.list, action.item] };
      break;
    case actionTypes.ADD_ITEM_ERROR:
      answer = { ...state };
      break;
    case actionTypes.UPDATE_ITEM:
      answer = { ...state, list: action.item };
      break;
    case actionTypes.UPDATE_ITEM_ERROR:
      answer = { ...state };
      break;
    case actionTypes.DELETE_ITEM:
      answer = { ...state, list: action.item };
      break;
    case actionTypes.DELETE_ITEM_ERROR:
      answer = { ...state, error: action.error };
      break;
    default:
      answer = state;
  }
  return answer;
}
