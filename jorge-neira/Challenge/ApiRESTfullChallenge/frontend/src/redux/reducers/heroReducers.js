import actionTypes from '../actions/actions-types';

export default function heroesReducers(state = {}, action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_HEROES:
      return { ...state, heroesList: action.payload };
    default:
      return state;
  }
}
