import axios from 'axios';
import actionTypes from './actionsTypes';

function loadLaptopListSuccess(productslist) {
  return {
    type: actionTypes.LOAD_LAPTOP_LIST,
    productslist,
  };
}

export default function loadProductList() {
  debugger;
  return async (dispatch) => {
    const URL = 'http://localhost:5000/list';
    try {
      const productsList = await axios.get(URL);
      dispatch(loadLaptopListSuccess(productsList.data));
    } catch (error) {
      console.log(error);
    }
  };
}
