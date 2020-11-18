import actionTypes from '../actions/actionTypes';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_TODO:
      return [...state, ...action.todos];
    case actionTypes.ADD_TODO:
      return [...state, action.newTodo];
    case actionTypes.DELETE_TODO:
      return state.filter((todo) => {
        const { _id } = todo;
        return _id !== action.deleteTodo;
      });
    default:
      return state;
  }
}
