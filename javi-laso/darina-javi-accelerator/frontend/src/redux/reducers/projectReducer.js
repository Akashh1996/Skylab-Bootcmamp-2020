import actionTypes from '../actions/actionTypes';

export default function projectsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      const categories = [...new Set(action.projects.map((project) => (
        project.categories.map((category) => category.toLowerCase())
      )).flat())];
      return { ...state, projects: action.projects, categories };
    case actionTypes.LOAD_PROJECTS_ERROR:
      return { ...state, errorProject: action.projectsError };
    case actionTypes.LOAD_PROJECT:
      return { ...state, project: action.project };
    case actionTypes.LOAD_PROJECT_ERROR:
      return { ...state, errorProject: action.projectsError };
    case actionTypes.CREATE_PROJECT:
      return { ...state, projects: [...state.projects, action.newProject] };
    case actionTypes.APPLY_FILTERS:
      const filteredProjects = state.projects.filter((project) => (
        action.values.every((value) => (
          project.categories.includes(value)
        ))
      ));
      return { ...state, filteredList: filteredProjects };
    case actionTypes.RESET_FILTERS:
      return { ...state, filteredList: null };
    default:
      return state;
  }
}
