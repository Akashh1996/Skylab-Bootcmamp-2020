import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, newTodo: actionTypes.newTodo };
    case actionTypes.ADD_TODO_ERROR:
      return { ...state, eorror: actionTypes.eorror };
    default:
      return state;
  }
}
