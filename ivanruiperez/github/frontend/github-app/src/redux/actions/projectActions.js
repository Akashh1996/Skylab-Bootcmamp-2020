/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const projectUrl = 'http://localhost:5500/projects';
const githubUrl = 'http://localhost:5500/github';

export function loadProjectsSuccess(projects) {
  return {
    type: actionTypes.LOAD_PROJECTS,
    projects,
  };
}

export function loadProjectsError(error) {
  return {
    type: actionTypes.LOAD_PROJECTS_ERROR,
    error,
  };
}

export function loadProjects() {
  return async (dispatch) => {
    try {
      const projects = await axios.get(projectUrl);
      dispatch(loadProjectsSuccess(projects.data));
    } catch (error) {
      dispatch(loadProjectsError(error));
    }
  };
}

function requestProjectSuccess(project) {
  return {
    type: actionTypes.LOAD_PROJECT,
    project,
  };
}

function requestProjectError(error) {
  return {
    type: actionTypes.LOAD_PROJECT_ERROR,
    error,
  };
}

export function loadProject(productId) {
  return async (dispatch) => {
    const endpoint = `${projectUrl}/${productId}`;
    try {
      const project = await axios.get(endpoint);
      dispatch(requestProjectSuccess(project.data));
    } catch (error) {
      dispatch(requestProjectError(error));
    }
  };
}

export function createProject(newProject) {
  return async () => {
    const endpoint = projectUrl;
    await axios.put(endpoint, { newProject });
  };
}

function requestLoginSuccess(login) {
  return {
    type: actionTypes.LOAD_LOGIN,
    login,
  };
}
function requestLoginError(errorlogin) {
  return {
    type: actionTypes.LOAD_LOGIN_ERROR,
    errorlogin,
  };
}
export function loginUser() {
  return async (dispatch) => {
    const endpoint = githubUrl;
    try {
      const userData = await axios.get(endpoint);
      console.log(userData);
      dispatch(requestLoginSuccess(userData.data));
    } catch (error) {
      dispatch(requestLoginError(error));
    }
  };
}
