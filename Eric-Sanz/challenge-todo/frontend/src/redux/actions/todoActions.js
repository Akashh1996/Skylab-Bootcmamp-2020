/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:5000/todo/';

function requestTodoSuccess(todos) {
  return {
    type: actionTypes.GET_TODO,
    todos,
  };
}

function requestTodoError(error) {
  return {
    type: actionTypes.GET_TODO_ERROR,
    error,
  };
}

export function requestTodos() {
  return async (dispatch) => {
    const { data } = await axios.get(URL);
    try {
      dispatch(requestTodoSuccess(data));
    } catch (error) {
      dispatch(requestTodoError(error));
    }
  };
}

export function putTodoSuccess(newTodo) {
  return {
    type: actionTypes.ADD_TODO,
    newTodo,
  };
}

export function putTodoError(error) {
  return {
    type: actionTypes.ADD_TODO_ERROR,
    error,
  };
}

export function addTodo(newTodoItem) {
  return async (dispatch) => {
    const { data } = await axios.put(URL, { input: newTodoItem });
    try {
      dispatch(putTodoSuccess(data));
    } catch (error) {
      dispatch(putTodoError(error));
    }
  };
}

export function deleteTodoSuccess(deleteTodo) {
  return {
    type: actionTypes.DELETE_TODO,
    deleteTodo,
  };
}

export function deleteTodoError(error) {
  return {
    type: actionTypes.DELETE_TODO_ERROR,
    error,
  };
}

export function removeTodo(removeTodoItem) {
  return async (dispatch) => {
    const { data } = await axios.delete(URL, { data: removeTodoItem });
    const { _id } = data;
    try {
      dispatch(deleteTodoSuccess(_id));
    } catch (error) {
      dispatch(deleteTodoError(error));
    }
  };
}
