import actionTypes from '../actions/actionTypes';

const initialState = {
  todosData: {},
  error: {},
};

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_TODOS:
      return { ...state, loadTodos: action.loadedTodos };
    case actionTypes.ADD_TODO:
      return { ...state, addTodo: action.addTodo };
    case actionTypes.UPDATE_TODO:
      return { ...state, updateTodo: action.deleteTodo };
    case actionTypes.DELETE_TODO:
      return { ...state, deleteTodo: action.updateTodo };
    case actionTypes.ERROR_REQUEST:
      return { ...state, errorRequest: action.error };
    default:
      return state;
  }
}

export function getActions(state) {
  return state.todosData;
}
