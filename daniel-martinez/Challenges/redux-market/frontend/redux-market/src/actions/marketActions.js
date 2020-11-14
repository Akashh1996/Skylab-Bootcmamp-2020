import axios from 'axios';
import actionTypes from './action-types';

function getProductsSucceed(products) {
  return {
    type: actionTypes.GET_PRODUCTS,
    products,
  };
}

const getProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/products');
  dispatch(getProductsSucceed(response.data));
};

export default getProducts;
