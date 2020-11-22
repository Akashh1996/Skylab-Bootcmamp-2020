import actionTypes from '../actions/actionTypes';

export default function gitReducer(state = {}, action) {
  let newState = null;
  switch (action.type) {
    case actionTypes.LOAD_PROJECTS:
      newState = { ...state, projectArray: action.projectList };
      break;
    case actionTypes.LOAD_PROJECT:
      newState = { ...state, projectItem: action.projectItem };
      break;
    case actionTypes.LOAD_ERROR:
      newState = { ...state, error: action.error };
      break;
    case actionTypes.LOAD_USERS:
      newState = { ...state, userArray: action.userList };
      break;
    default:
      newState = { ...state };
      break;
  }
  return newState;
}
