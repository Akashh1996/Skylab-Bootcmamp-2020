import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD__LIST: {
      const todos = { ...state, todoList: action.todoList };
      return todos;
    }
    case actionTypes.LOAD_ERROR: {
      return console.log(action.error);
    }
    default:
      return state;
  }
}
