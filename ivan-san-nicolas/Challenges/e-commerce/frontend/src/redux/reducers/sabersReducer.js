import actionTypes from '../actions/actionTypes';

export default function sabersReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_SABERS: {
      const sabers = { ...state, sabersArray: action.sabersList };
      return sabers;
    }
    case actionTypes.LOAD_SABERS_ERROR: {
      console.log(action.error);
      break;
    }
    case actionTypes.LOAD_SABER:{
      const saber = { ...state, saberItem: action.saberItem }
      return saber;
    }
    case actionTypes.LOAD_SABER_ERROR: {
      console.log(action.error);
      break;
    }
    default:
      return state;
  }
}
