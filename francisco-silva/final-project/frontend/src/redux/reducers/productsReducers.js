/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

export default function productsReducers(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return { ...state, productList: action.productList };

    case actionTypes.LOAD_PRODUCTS_ERROR:
      return { ...state, error: action.error };

    case actionTypes.LOAD_PRODUCT_DETAIL:
      return { ...state, productDetail: action.productDetail };

    case actionTypes.SEND_MESSAGE:
      return { ...state, newMessage: action.newMessage };

    case actionTypes.SEND_ORDER:
      return { ...state, newOrder: action.newOrder };

    case actionTypes.FILTER_PRODUCTS:
      return { ...state, productList: state.productList.filter((product) => product.category.includes(action.typeOfProduct)) };

    case actionTypes.RESET_FILTERS:
      return { ...state, productList: action.productList };

    default:
      return state;
  }
}
