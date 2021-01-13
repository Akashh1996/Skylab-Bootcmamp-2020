import axios from 'axios';
import actionTypes from './actionTypes';

const groceryListUrl = 'http://192.168.0.17:2000/list';
const userUrl = 'http://192.168.0.17:2000/user';

export function getProductTypeFromFoodDBSuccess(product: object) {
  return {
    type: actionTypes.GET_PRODUCT_TYPE,
    product,
  };
}

export function getProductTypeFromFoodDB(product: string) {
  return async (dispatch: (arg0: { type: string; product: object; }) => void) => {
    try {
      let { data } = await axios.get(groceryListUrl, { params: { product } });
      if (!data.length) {
        data = [{
          product, type: 'uncategorized',
        }];
      }
      dispatch(getProductTypeFromFoodDBSuccess([{ ...data[0], isCrossed: false, amount: 1 }]));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteAllProductsFromGorceryList() {
  return {
    type: actionTypes.DELETE_ALL_PRODUCTS,
  };
}

export function deleteProductFromGorceryList(productName: string) {
  return {
    type: actionTypes.DELETE_PRODUCT,
    productName,
  };
}

export function crossOverProductFromGorceryList(product: Object) {
  return {
    type: actionTypes.CROSS_OVER_PRODUCT,
    product,
  };
}

export function updateUserGroceryList(user: Object) {
  return {
    type: actionTypes.UPDATE_USER_GROCERY_LIST,
    user,
  };
}

export function updateGroceryListInDB(user: Object, groceryList: Object[]) {
  return async (dispatch: (arg0: { type: string; user: object; }) => void) => {
    try {
      const { data } = await axios.put(`${userUrl}/list`, { user, groceryList });
      dispatch(updateUserGroceryList(data));
    } catch (error) {
      console.log(error);
    }
  };
}
