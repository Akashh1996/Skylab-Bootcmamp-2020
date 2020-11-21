/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const serverProjectsUrl = 'http://localhost:2130/projects';
const githubLoginUrl = 'http://localhost:2130/github';

function requestProjectsSuccess(projects) {
  return {
    type: actionTypes.LOAD_PROJECTS,
    projects,
  };
}

function requestProjectsError(projectsError) {
  return {
    type: actionTypes.LOAD_PROJECTS_ERROR,
    projectsError,
  };
}

export function requestProjects() {
  return async (dispatch) => {
    try {
      const projects = await axios.get(serverProjectsUrl);
      dispatch(requestProjectsSuccess(projects.data));
    } catch (error) {
      dispatch(requestProjectsError(error));
    }
  };
}

export function githubLoginError(error) {
  return {
    type: actionTypes.GITHUB_LOGIN_ERROR,
    error,
  };
}

export function githubLogin() {
  // eslint-disable-next-line no-unused-vars
  return async (dispatch) => {
    try {
      const userData = await fetch(githubLoginUrl, {
        mode: 'no-cors',
      });

      dispatch(githubLoginError(userData));
    } catch (error) {
      dispatch(githubLoginError(error));
    }
  };
}
