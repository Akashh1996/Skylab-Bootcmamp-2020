import actionTypes from '../actions/actionTypes';

export default function todosReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_TODOS:
      return { ...state, loadTodos: action.loadedTodos };
    case actionTypes.ADD_TODO:
      return { ...state, addTodo: action.loadedTodos };
    case actionTypes.UPDATE_TODO:
      return { ...state, updateTodo: action.loadedTodos };
    case actionTypes.DELETE_TODO:
      return { ...state, deleteTodo: action.loadedTodos };
    default:
      return state;
  }
}
