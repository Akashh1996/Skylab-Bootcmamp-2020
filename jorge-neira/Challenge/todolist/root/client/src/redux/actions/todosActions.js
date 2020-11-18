import axios from 'axios';
import actionTypes from './actionTypes';

const endpointURL = 'http://localhost:5000/todos';

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

export function addTodoSuccess(newTodo) {
  return {
    type: actionTypes.ADD_TODO,
    newTodo,
  };
}

export function deleteTodoSuccess(deletedTodo) {
  return {
    type: actionTypes.DELETE_TODO,
    deletedTodo,
  };
}

export function updateTodoSuccess(updatedTodo) {
  return {
    type: actionTypes.UPDATE_TODO,
    updatedTodo,
  };
}

export function loadTodos() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpointURL);
      dispatch(loadTodosSuccess(data));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
export function addTodo(todoToCreate) {
  return async (dispatch) => {
    try {
      const newTodo = await axios.post(endpointURL, { ...todoToCreate });
      dispatch(addTodoSuccess(newTodo));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
export function deleteTodo(todoToDelete) {
  return async (dispatch) => {
    try {
      const deletedTodo = axios.delete(endpointURL, { ...todoToDelete });
      dispatch(deleteTodoSuccess(deletedTodo));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
export function updateTodo(todoToUpdate) {
  return async (dispatch) => {
    try {
      const updatedTodo = axios.patch(endpointURL, { ...todoToUpdate });
      dispatch(updateTodoSuccess(updatedTodo));
    } catch (error) {
      dispatch(errorRequest(error));
    }
  };
}
