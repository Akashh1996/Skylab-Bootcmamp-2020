import axios from 'axios';
import actionTypes from './actionTypes';

export function requestTodoListSuccess(todoList) {
  return {
    type: actionTypes.LOAD__LIST,
    todoList,
  };
}

export function requestError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

export function requestTodoList() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:3333/';
    try {
      const todoList = await axios.get(endpoint);
      dispatch(requestTodoListSuccess(todoList.data));
    } catch (error) {
      dispatch(requestError(error));
    }
  };
}
