import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:2000/products/';

function requestProductsSuccess(productList) {
  return {
    type: actionTypes.LOAD_PRODUCTS,
    products: productList,
  };
}

function requestProductsError(error) {
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

export function requestProducts() {
  return async (dispatch) => {
    const { data } = await axios.get(url);
    try {
      dispatch(requestProductsSuccess(data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

export async function addToCartDataBase(product) {
  await axios.post();
  return {
    type: actionTypes.ADD_TO_CART,
    product,
  };
}
// export function addToCart(product) {
//   debugger;
//   return {
//     type: actionTypes.ADD_TO_CART,
//     product,
//   };
// }
