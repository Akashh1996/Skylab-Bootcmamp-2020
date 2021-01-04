import actionTypes from '../actions/actionsTypes';

const initialState = {
  cartList: [],
  productList: [],
  productDetail: [],
};

export default function productReducer(state = initialState, action) {
  const {
    type, cartList, productList, productDetail,
  } = action;
  let updateState;
  switch (type) {
    case actionTypes.LOAD_CART_LIST:
      updateState = { ...state, cartList };
      break;
    case actionTypes.LOAD_PRODUCT_LIST:
      updateState = { ...state, productList };
      break;
    case actionTypes.LOAD_PRODUCT_BY_MODEL:
      updateState = { ...state, productDetail };
      break;
    default:
      updateState = state;
      break;
  }
  return updateState;
}
