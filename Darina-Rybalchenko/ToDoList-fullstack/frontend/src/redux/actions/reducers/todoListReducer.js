/* eslint-disable no-case-declarations */
import actionTypes from '../actionTypes';

export default function todoListReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      const loadList = { ...state, list: action.todoList };
      return loadList;
    case actionTypes.LOAD_LIST_ERROR:
      const loadError = { ...state, errorList: action.todoListError };
      return loadError;
    default:
      return state;
  }
}
