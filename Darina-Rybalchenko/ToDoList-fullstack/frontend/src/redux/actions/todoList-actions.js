import axios from 'axios';
import actionTypes from './actionTypes';

function requestTodoListSuccess(todoList) {
  return {
    type: actionTypes.LOAD_LIST,
    todoList,
  };
}

function requestTodoListError(todoListError) {
  return {
    type: actionTypes.LOAD_LIST_ERROR,
    todoListError,
  };
}

export default function requestTodoList() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/list';
    try {
      const todoList = await axios.get(endpoint);
      dispatch(requestTodoListSuccess(todoList.data));
    } catch (error) {
      dispatch(requestTodoListError(error));
    }
  };
}
