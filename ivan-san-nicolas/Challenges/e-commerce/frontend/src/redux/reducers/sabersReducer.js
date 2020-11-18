import actionTypes from '../actions/actionTypes';

export default function sabersReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_SABERS: {
      const sabers = { ...state, sabersArray: action.sabersList };
      return sabers;
    }
    case actionTypes.LOAD_ERROR: {
      console.log(action.error);
      return state;
    }
    case actionTypes.LOAD_SABER:{
      const saber = { ...state, saberItem: action.saberItem };
      return saber;
    }
    default:
      return state;
  }
}
