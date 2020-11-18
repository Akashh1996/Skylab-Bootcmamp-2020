import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.newTodo] };
    case actionTypes.ADD_TODO_ERROR:
      return { ...state, eorror: action.eorror };
    case actionTypes.LOAD_TODO:
      return { ...state, todoList: action.todoList };
    case actionTypes.LOAD_TODO_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}
