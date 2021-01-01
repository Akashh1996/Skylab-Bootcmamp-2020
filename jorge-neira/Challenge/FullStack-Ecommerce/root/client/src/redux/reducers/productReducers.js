import actionTypes from '../actions/actionsTypes';

const initialState = {};

export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_CART_LIST:
      return { ...state, cartList: action.cartList };
    case actionTypes.LOAD_PRODUCT_LIST:
      return { ...state, productList: action.productslist };
    case actionTypes.LOAD_PRODUCT_BY_MODEL:
      return { ...state, productDetail: action.productDetail };
    default:
      return state;
  }
}
