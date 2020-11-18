import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOAD__LIST: {
      const newState = { ...state, todoList: action.todoList };
      break;
    }
    case actionTypes.LOAD_ERROR: {
      const newState = { ...state, todoListError: action.error };
      break;
    }
    default:
      newState = {...state};
      break;
  }
  return newState;
}
