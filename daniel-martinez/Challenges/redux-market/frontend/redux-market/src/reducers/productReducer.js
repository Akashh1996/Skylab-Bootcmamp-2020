import actionTypes from '../actions/action-types';

export default function productReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS:
      return action.products;

    default:
      return state;
  }
}
