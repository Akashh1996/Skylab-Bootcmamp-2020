/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const serverProjectsUrl = 'http://localhost:2130/projects';

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

export function createProject(newProject) {
  return async (dispatch) => {
    try {
      await axios.post(serverProjectsUrl, newProject);
      dispatch(requestProjects());
    } catch (error) {
      console.log(error);
    }
  };
}
