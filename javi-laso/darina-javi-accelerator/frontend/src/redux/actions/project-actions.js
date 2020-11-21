import axios from 'axios';
import actionTypes from './actionTypes';

const URL = 'http://localhost:2130/projects';

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

export default function requestProjects() {
  return async (dispatch) => {
    try {
      const projects = await axios.get(URL);
      dispatch(requestProjectsSuccess(projects.data));
    } catch (error) {
      dispatch(requestProjectsError(error));
    }
  };
}
