import axios from 'axios';
import actiontypes from './actionTypes';

function addTodoSuccess(newTodo) {
  return {
    type: actiontypes.ADD_TODO,
    newTodo,
  };
}
function addTodoError(error) {
  return {
    type: actiontypes.ADD_TODO_ERROR,
    error,
  };
}

export default function addTodo(newTodo) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:8000/todo';
    try {
      const addTodoList = await axios.put(endpoint, newTodo);
      dispatch(addTodoSuccess(addTodoList.data));
    } catch (error) {
      dispatch(addTodoError(error));
    }
  };
}
function loadTodoSuccess(todoList) {
  return {
    type: actiontypes.LOAD_TODO,
    todoList,
  };
}
function loadTodoError(error) {
  return {
    type: actiontypes.LOAD_TODO_ERROR,
    error,
  };
}

export function loadTodo() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:8000/todo';
    try {
      const loadTodoList = await axios.get(endpoint);
      dispatch(loadTodoSuccess(loadTodoList.data));
    } catch (error) {
      dispatch(loadTodoError(error));
    }
  };
}
