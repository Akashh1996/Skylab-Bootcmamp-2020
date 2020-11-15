import axios from 'axios';
import actionTypes from './actionTypes';

function requestProductSuccess(productList) {
  // eslint-disable-next-line no-debugger
  debugger;
  return {
    type: actionTypes.LOAD_PRODUCTS,
    productList,
  };
}

function requestProductsError(error) {
  return {
    type: actionTypes.LOAD_PRODUCTS_ERROR,
    error,
  };
}

export default function requestProduct() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:6000/products';
    try {
      // eslint-disable-next-line no-debugger
      debugger;
      const products = await axios.get(endpoint);
      dispatch(requestProductSuccess(products.data));
    } catch (error) {
      dispatch(requestProductsError(error));
    }
  };
}

/* export default function cleanUp() {
  return {
    type: actionTypes.PRODUCT_DETAIL_CLEANUP,
  };
}
 */
