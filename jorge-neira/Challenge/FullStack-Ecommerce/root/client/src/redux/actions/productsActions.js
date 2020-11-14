import axios from 'axios';
import actionTypes from './actionsTypes';

function loadLaptopListSuccess(productslist) {
  return {
    type: actionTypes.LOAD_LAPTOP_LIST,
    productslist,
  };
}

function loadLaptopListError({ type }) {
  return {
    type,
  };
}

export default function loadProductList() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:5000/list';
    try {
      const productsList = await axios.get(endpoint);
      dispatch(loadLaptopListSuccess(productsList.data));
    } catch (error) {
      dispatch(loadLaptopListError({
        type: actionTypes.LOAD_LAPTOP_ERROR,
      }));
    }
  };
}
