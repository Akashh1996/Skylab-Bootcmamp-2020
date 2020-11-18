import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:5000/todos';

export function errorRequest(error) {
  return {
    type: actionTypes.ERROR_REQUEST,
    error,
  };
}

export function loadTodosSuccess(todos) {
  return {
    type: actionTypes.LOAD_TODOS,
    todos,
  };
}

function addTodoSuccess(newTodo) {
  return {
    type: actionTypes.ADD_TODO,
    newTodo,
  };
}

function deleteTodoSuccess(deletedTodo) {
  return {
    type: actionTypes.DELETE_TODO,
    deletedTodo,
  };
}

function updateTodoSuccess(updatedTodo) {
  return {
    type: actionTypes.UPDATE_TODO,
    updatedTodo,
  };
}

export function loadTodos() {
  return async (dispatch) => {
    try {
      const todos = await axios.get(URL);
      dispatch(loadTodosSuccess(todos));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
export function addTodo(todoToCreate) {
  return async (dispatch) => {
    try {
      const newTodo = await axios.post(URL, { ...todoToCreate });
      dispatch(addTodoSuccess(newTodo));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
export function deleteTodo(todoToDelete) {
  return async (dispatch) => {
    try {
      const deletedTodo = axios.delete(URL, { ...todoToDelete });
      dispatch(deleteTodoSuccess(deletedTodo));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
export function updateTodo(todoToUpdate) {
  return async (dispatch) => {
    try {
      const updatedTodo = axios.patch(URL, { ...todoToUpdate });
      dispatch(updateTodoSuccess(updatedTodo));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
