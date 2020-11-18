/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

// const initialState = {
//   todosData: {},
//   error: {},
// };

export default function todosReducer(state = {}, action) {
  const {
    type, todos, newTodo, updatedTodo, deletedTodo, error,
  } = action;
  debugger;
  switch (type) {
    case actionTypes.LOAD_TODOS:
      return { ...state, todos };
    case actionTypes.ADD_TODO:
      return { ...state, newTodo };
    case actionTypes.UPDATE_TODO:
      return { ...state, updatedTodo };
    case actionTypes.DELETE_TODO:
      return { ...state, deletedTodo };
    case actionTypes.ERROR_REQUEST:
      return { ...state, errorRequest: error };
    default:
      return state;
  }
}

export function getActions(state) {
  return state.todosData;
}
