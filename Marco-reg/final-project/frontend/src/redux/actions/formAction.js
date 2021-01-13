import axios from 'axios';
import actionTypes from './actionTypes';

function requestDeleteSucces(listItem) {
  return {
    type: actionTypes.DELETE_PROJECT, listItem,
  };
}

function requestCreateSuccess(list) {
  return {
    type: actionTypes.CREATE_PROJECT,
    list,
  };
}

export function createProjectError(error) {
  return {
    type: actionTypes.CREATE_PROJECT_ERROR,
    error,
  };
}

export function createProject(list) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:3020/form';
    try {
      await axios.put(endpoint, list);
      dispatch(requestCreateSuccess(list));
    } catch (error) {
      dispatch(createProjectError(error));
    }
  };
}

function deleteProjectError(error) {
  return {
    type: actionTypes.DELETE_PROJECT_ERROR,
    error,
  };
}

export function deleteProject(listItem) {
  return async (dispatch) => {
    const endpoint = 'http://localhost:3020/form';
    try {
      await axios.delete(endpoint, listItem);
      dispatch(requestDeleteSucces(listItem));
    } catch (error) {
      dispatch(deleteProjectError(error));
    }
  };
}
