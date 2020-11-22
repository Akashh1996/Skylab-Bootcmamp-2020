/* eslint-disable no-debugger */
import axios from 'axios';
import actionTypes from './actionTypes';

const projectUrl = 'http://localhost:5500/projects';

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
