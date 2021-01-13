// @ts-nocheck

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import actionTypes from '../src/redux/actions/actionTypes';
import * as actions from '../src/redux/actions/groceryListActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('groceryListActions', () => {
  let store: Object;

  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    axios.mockRestore();
  });

  it('should call getProductTypeFromFoodDB and modify the store actions on resolve accordingly with data being an empty array', async () => {
    const product = 'lasagna';
    const response = {
      data: [],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.getProductTypeFromFoodDB(product));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_PRODUCT_TYPE,
      product: [{
        product, type: 'uncategorized', amount: 1, isCrossed: false,
      }],
    }]);
  });

  it('should call getProductTypeFromFoodDB and modify the store actions on resolve accordingly with data being an array with content', async () => {
    const product = 'lasagna';
    const response = {
      data: [{ product, type: 'pasta' }],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.getProductTypeFromFoodDB(product));

    expect(store.getActions()).toEqual([{
      type: actionTypes.GET_PRODUCT_TYPE,
      product: [{
        product, type: 'pasta', amount: 1, isCrossed: false,
      }],
    }]);
  });

  it('should call getProductTypeFromFoodDB and, on reject, call console.log', async () => {
    const product = 'lasagna';
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.get.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.getProductTypeFromFoodDB(product));

    expect(console.log).toHaveBeenCalled();
  });

  it('should call deleteAllProductsFromGorceryList and modify the store actions accordingly', () => {
    store.dispatch(actions.deleteAllProductsFromGorceryList());

    expect(store.getActions()).toEqual([{
      type: actionTypes.DELETE_ALL_PRODUCTS,
    }]);
  });

  it('should call deleteProductFromGorceryList and modify the store actions accordingly', () => {
    const productName = 'apple';

    store.dispatch(actions.deleteProductFromGorceryList(productName));

    expect(store.getActions()).toEqual([{
      type: actionTypes.DELETE_PRODUCT,
      productName,
    }]);
  });

  it('should call crossOverProductFromGorceryList and modify the store actions accordingly', () => {
    const product = 'apple';

    store.dispatch(actions.crossOverProductFromGorceryList(product));

    expect(store.getActions()).toEqual([{
      type: actionTypes.CROSS_OVER_PRODUCT,
      product,
    }]);
  });

  it('should call updateGroceryListInDB and modify the store actions on resolve accordingly with data being an array with content', async () => {
    const user = null;
    const groceryList = null;
    const response = {
      data: { name: 'David' },
    };

    axios.put.mockImplementationOnce(() => Promise.resolve(response));
    await store.dispatch(actions.updateGroceryListInDB(user, groceryList));

    expect(store.getActions()).toEqual([{
      type: actionTypes.UPDATE_USER_GROCERY_LIST,
      user: response.data,
    }]);
  });

  it('should call updateGroceryListInDB and, on reject, call console.log', async () => {
    const user = null;
    const groceryList = null;
    const error = 'Mock error';
    jest.spyOn(global.console, 'log');

    axios.put.mockImplementationOnce(() => Promise.reject(error));
    await store.dispatch(actions.updateGroceryListInDB(user, groceryList));

    expect(console.log).toHaveBeenCalled();
  });
});
