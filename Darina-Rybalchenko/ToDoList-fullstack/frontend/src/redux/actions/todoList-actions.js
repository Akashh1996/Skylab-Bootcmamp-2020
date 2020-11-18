import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:1240/list';

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
    try {
      const todoList = await axios.get(URL);
      dispatch(requestTodoListSuccess(todoList.data));
    } catch (error) {
      dispatch(requestTodoListError(error));
    }
  };
}
