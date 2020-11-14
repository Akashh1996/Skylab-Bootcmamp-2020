import actionTypes from '../actions/actionsTypes';

export default function asusReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_LAPTOP_LIST:
      return [...state, action.payload];
    default:
      return state;
  }
}
