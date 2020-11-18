import actionTypes from '../actions/actionTypes';

const initialState = {
  todosData: {},
  error: {},
};

export default function todosReducer(state = initialState, action) {
  const {
    type, loadedTodos, addTodo, updateTodo, deleteTodo, error,
  } = action;

  switch (type) {
    case actionTypes.LOAD_TODOS:
      return { ...state, loadedTodos };
    case actionTypes.ADD_TODO:
      return { ...state, addTodo };
    case actionTypes.UPDATE_TODO:
      return { ...state, updateTodo };
    case actionTypes.DELETE_TODO:
      return { ...state, deleteTodo };
    case actionTypes.ERROR_REQUEST:
      return { ...state, errorRequest: error };
    default:
      return state;
  }
}

export function getActions(state) {
  return state.todosData;
}
