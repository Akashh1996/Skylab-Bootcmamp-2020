/* eslint-disable no-unused-vars */
/* eslint-disable no-case-declarations */
/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, newTodo: action.newTodo };
    case actionTypes.ADD_TODO_ERROR:
      return { ...state, eorror: action.eorror };
    case actionTypes.LOAD_TODO:
      const myState = { ...state, todoList: action.todoList };
      debugger;
      return { ...state, todoList: action.todoList };
    case actionTypes.LOAD_TODO_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
