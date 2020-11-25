/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

const serverProjectsUrl = 'http://localhost:2130/projects';

export function requestProjectsSuccess(projects) {
  return {
    type: actionTypes.LOAD_PROJECTS,
    projects,
  };
}

export function requestProjectsError(projectsError) {
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

export function createProjectSuccess(newProject) {
  return {
    type: actionTypes.CREATE_PROJECT,
    newProject,
  };
}

export function createProjectError(error) {
  return {
    type: actionTypes.CREATE_PROJECT_ERROR,
    error,
  };
}

export function createProject(newProject) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(serverProjectsUrl, newProject);
      dispatch(createProjectSuccess(data));
    } catch (error) {
      dispatch(createProjectError(error));
    }
  };
}

function requestProjectDetailSuccess(project) {
  return {
    type: actionTypes.LOAD_PROJECT,
    project,
  };
}

function requestProjectDetailError(projectError) {
  return {
    type: actionTypes.LOAD_PROJECT_ERROR,
    projectError,
  };
}

export function requestProjectDetail(_id) {
  return async (dispatch) => {
    try {
      const project = await axios.get(`${serverProjectsUrl}/${_id}`);
      dispatch(requestProjectDetailSuccess(project.data));
    } catch (error) {
      dispatch(requestProjectDetailError(error));
    }
  };
}
