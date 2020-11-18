import actionTypes from '../actions/actionTypes';

export default function productReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return { ...state, productList: action.productList };
    case actionTypes.LOAD_PRODUCTS_ERROR:
      return { ...state, error: action.error };
    case actionTypes.LOAD_PRODUCT_DETAIL:
      return { ...state, productDetail: action.productDetail };
    case actionTypes.LOAD_PRODUCT_DETAIL_ERROR:
      return { ...state, productDetail: action.error };
    case actionTypes.PRODUCT_DETAIL_CLEANUP:
      return { ...state, productDetail: null };
    case actionTypes.ADD_ITEM_CART:
      return { ...state, cartProduct: action.cartProduct };
    case actionTypes.LOAD_PRODUCT_CART:
      // eslint-disable-next-line no-debugger
      debugger;
      return { ...state, productCartList: action.productCartList };
    default:
      return state;
  }
}
