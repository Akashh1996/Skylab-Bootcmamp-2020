import actionTypes from '../actions/actionTypes';

export default function clothReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_SABERS: {
      const clothes = { ...state, sabersArray: action.sabersList };
      return clothes;
    }

    default:
      return state;
  }
}
