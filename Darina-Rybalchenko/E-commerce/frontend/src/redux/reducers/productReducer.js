/* eslint-disable no-case-declarations */
/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function productReducer(state = {}, action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_PRODUCT:
      const loadProducts = { ...state, productsArray: action.productsList };
      return loadProducts;
    case actionTypes.LOAD_PRODUCT_DETAIL:
      const loadProduct = { ...state, productId: action.product };
      return loadProduct;
    case actionTypes.LOAD_BASKET:
      const loadBasket = { ...state, product: action.basket };
      return loadBasket;
    case actionTypes.LOAD_PRODUCT_BASKET:
      const loadProductBasket = { ...state, productInBasket: action.productBasket };
      return loadProductBasket;
    case actionTypes.LOAD_PRODUCT_ERROR:
      const error = { ...state, errorList: action.productsListError };
      return error;
    default:
      return state;
  }
}
