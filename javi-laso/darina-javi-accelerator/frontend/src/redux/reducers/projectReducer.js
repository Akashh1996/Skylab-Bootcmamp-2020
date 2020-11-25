import actionTypes from '../actions/actionTypes';

export default function projectsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      return { ...state, projects: action.projects };

    case actionTypes.LOAD_PROJECT:
      return { ...state, project: action.project };
    case actionTypes.LOAD_PROJECT_ERROR:
      return { ...state, errorProject: action.projectsError };
    case actionTypes.LOAD_PROJECTS_ERROR:
      return { ...state, errorProject: action.projectsError };
    case actionTypes.CREATE_PROJECT:
      return { ...state, projects: [...state.projects, action.newProject] };
    default:
      return state;
  }
}
