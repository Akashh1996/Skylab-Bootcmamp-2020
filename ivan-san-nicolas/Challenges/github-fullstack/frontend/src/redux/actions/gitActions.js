import axios from 'axios';
import actionTypes from './actionTypes';

function loadProjectsSuccess(projectList) {
  return {
    type: actionTypes.LOAD_PROJECTS,
    projectList,
  };
}

function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

function loadUsersSuccess(usersList) {
  return {
    type: actionTypes.LOAD_USERS,
    usersList,
  };
}

export function loadProjects() {
  return async (dispatch) => {
    const endpoint = 'http:://localhost:1240/projects/';
    try {
      const projects = await axios(endpoint);
      dispatch(loadProjectsSuccess(projects.data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const endpoint = 'http:://localhost:1240/users';
    try {
      const users = await axios(endpoint);
      dispatch(loadUsersSuccess(users.data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
