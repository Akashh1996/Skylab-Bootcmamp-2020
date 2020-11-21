import actionTypes from '../actions/actionTypes';

export default function projectsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      const loadProjects = { ...state, projects: action.projects };
      return loadProjects;
    case actionTypes.LOAD_PROJECTS_ERROR:
      const projectsError = { ...state, errorProject: action.projectsError };
      return projectsError;
    default:
      return state;
  }
}
