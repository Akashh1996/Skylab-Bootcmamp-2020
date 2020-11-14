import axios from 'axios';
import actionTypes from './action-types';

const getProducts = () => async (dispatch) => {
  const response = await axios.get('http://localhost:5000/products');
  dispatch({
    type: actionTypes.GET_PRODUCTS,
    products: response.data,
  });
};

export default getProducts;
