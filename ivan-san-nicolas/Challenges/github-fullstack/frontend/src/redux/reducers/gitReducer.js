import actionTypes from '../actions/actionTypes';

export default function gitReducer(state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      newState = { ...state, projectArray: action.projectList };
      break;
    case actionTypes.LOAD_PROJECTS_ERROR:
      newState = { ...state, error: action.error };
      break;
    case actionTypes.LOAD_USERS:
      newState = { ...state, userArray: action.userList };
      break;
    case actionTypes.LOAD_USERS_ERROR:
      newState = { ...state, error: action.error };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
}
