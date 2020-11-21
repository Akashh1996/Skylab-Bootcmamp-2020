import axios from 'axios';
import actionTypes from './actionTypes';

function loadProjectsSuccess(projectList) {
  return {
    type: actionTypes.LOAD_PROJECTS,
    projectList,
  };
}

function loadProjectsError(error) {
  return {
    type: actionTypes.LOAD_PROJECTS_ERROR,
    error,
  };
}

function loadUsersSuccess(usersList) {
  return {
    type: actionTypes.LOAD_USERS,
    usersList,
  };
}

function loadUsersError(error) {
  return {
    type: actionTypes.LOAD_USERS_ERROR,
    error,
  };
}

export function loadProjects() {
  return async (dispatch) => {
    const endpoint = 'http:://localhost:1240/projects/';
    try {
      const projects = await axios(endpoint);
      dispatch(loadProjectsSuccess(projects.data));
    } catch (error) {
      dispatch(loadProjectsError(error));
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
      dispatch(loadUsersError(error));
    }
  };
}
