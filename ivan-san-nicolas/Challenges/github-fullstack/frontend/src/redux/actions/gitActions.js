import axios from 'axios';
import actionTypes from './actionTypes';

function loadProjectsSuccess(projectList) {
  return {
    type: actionTypes.LOAD_PROJECTS,
    projectList,
  };
}

function loadProjectSuccess(projectItem) {
  return {
    type: actionTypes.LOAD_PROJECT,
    projectItem,
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

export function loadProject(projectId) {
  debugger;
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/project';
    try {
      const project = await axios.get(endpoint, { projectId });
      debugger;
      dispatch(loadProjectSuccess(project.data));
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
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/project';
    try {
      await axios.patch(endpoint, {
        projectId,
        updatedProject,
      });
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
