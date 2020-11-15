import actionTypes from '../actions/actionsTypes';

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_LAPTOP_LIST:
      return { ...state, productList: action.productslist };
    case actionTypes.LOAD_LAPTOP_BY_ID:
      return { ...state, productDetail: action.productDetail };
    default:
      return state;
  }
}
