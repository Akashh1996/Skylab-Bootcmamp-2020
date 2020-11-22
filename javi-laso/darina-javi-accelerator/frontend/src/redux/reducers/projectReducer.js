/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function projectsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      const loadProjects = { ...state, projects: action.projects };
      return loadProjects;
    case actionTypes.LOAD_PROJECT:
      debugger;
      const loadProject = { ...state, project: action.project };
      return loadProject;
    case actionTypes.LOAD_PROJECT_ERROR:
      const projectError = { ...state, errorProject: action.projectsError };
      return projectError;
    case actionTypes.LOAD_PROJECTS_ERROR:
      const projectsError = { ...state, errorProject: action.projectsError };
      return projectsError;
    default:
      return state;
  }
}
