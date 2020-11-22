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
    const endpoint = 'http://localhost:1240/projects/';
    try {
      const projects = await axios.get(endpoint);
      dispatch(loadProjectsSuccess(projects.data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function loadUsers() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/users';
    try {
      const users = await axios.get(endpoint);
      dispatch(loadUsersSuccess(users.data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function updateProject(projectId, updatedProject) {
  debugger;
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/project';
    try {
      let projects = await axios.patch(endpoint, {
        projectId,
        updatedProject,
      }); try {
        projects = await axios.get(endpoint);
        dispatch(loadProjectsSuccess(projects.data));
      } catch (error) {
        dispatch(loadError(error));
      }
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
