import axios from 'axios';
import thunk from 'redux-thunk';

import configureMockStore from 'redux-mock-store';
import actionTypes from './actionTypes';

import {
  requestProducts,
  requestProductDetail,
  sendMessage,
  loadShoppingCart,
  deleteItemFromCart,
  putItemInCart,
  filterProductsBytype,
  resetFilters,
  sendOrder,
} from './productAction';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  describe('products actions', () => {
    let fakeData;
    let fakeError;
    let store;

    beforeEach(() => {
      store = mockStore();
      fakeData = { user: 'pepe' };
      fakeError = 'error';
    });
    afterEach(() => {
      jest.resetAllMocks();
    });

    test('request products from db', async () => {
      axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: 1 }));
      const dispatch = jest.fn();

      await requestProducts()(dispatch);

      const expectedValue = {
        type: 'LOAD_PRODUCTS',
        productList: 1,
      };
      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });

    test('error on request products', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(requestProducts());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_PRODUCTS_ERROR);
    });

    test('request product detail from db', async () => {
      axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: 12 }));
      const dispatch = jest.fn();
      await requestProductDetail(1232)(dispatch);

      const expectedValue = {
        productDetail: 12,
        type: 'LOAD_PRODUCT_DETAIL',
      };
      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });

    test('error on request detail', async () => {
      axios.get = jest.fn().mockReturnValue(Promise.reject(Error('error')));
      const dispatch = jest.fn();
      await requestProductDetail(1232)(dispatch);

      expect(dispatch.mock.calls[0][0].error.message).toBe('error');
    });

    test('send message to db', async () => {
      axios.post = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(sendMessage());
      expect(store.getActions()[0].type).toBe(actionTypes.SEND_MESSAGE);
    });
    test('error on send message to db', async () => {
      axios.post = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(sendMessage());
      expect(store.getActions()[0].type).toBe(actionTypes.SEND_MESSAGE_ERROR);
    });

    test('load shopping cart', async () => {
      axios.get = jest.fn().mockResolvedValueOnce(fakeData);
      await store.dispatch(loadShoppingCart());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SHOPPING_CART);
    });
    test('error on load shopping cart', async () => {
      axios.get = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(loadShoppingCart());
      expect(store.getActions()[0].type).toBe(actionTypes.LOAD_SHOPPING_CART_ERROR);
    });

    test('delete item from cart', async () => {
      axios.delete = jest.fn().mockReturnValue(Promise.resolve({ data: 12 }));
      const dispatch = jest.fn();
      const item = {
        product: {
          _id: 12,
        },
      };
      await deleteItemFromCart(item)(dispatch);

      const expectedValue = {
        cartItem: 12,
        type: 'DELETE_ITEM_FROM_CART',
      };
      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });
    test('error on delete item from cart', async () => {
      axios.delete = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(deleteItemFromCart());
      expect(store.getActions()[0].type).toBe(actionTypes.DELETE_ITEM_FROM_CART_ERROR);
    });

    test('should call dispatch with deleteItemFromCart when qtt is 0', async () => {
      const mock = {
        data: {
          quantity: 0,
          product: ['as'],
        },
      };
      axios.put = jest.fn().mockReturnValue(Promise.resolve(mock));
      const dispatch = jest.fn();

      await putItemInCart(0, 0, 0)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
    test('should call dispatch with putItemCartSuccess when qtt is 1', async () => {
      const mock = {
        data: {
          quantity: 1,
          product: ['as'],
        },
      };
      axios.put = jest.fn().mockReturnValue(Promise.resolve(mock));
      const dispatch = jest.fn();

      await putItemInCart(0, 0, 0)(dispatch);
      const expectedValue = {
        type: 'PUT_ITEM_IN_CART',
        cartItem: mock.data,
      };

      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });

    test('error on put item on cart', async () => {
      axios.put = jest.fn().mockRejectedValueOnce(fakeError);
      await store.dispatch(putItemInCart());
      expect(store.getActions()[0].type).toBe(actionTypes.PUT_ITEM_IN_CART_ERROR);
    });

    test('should return an action with type filter products and type of product', () => {
      const typeOfProduct = 'la';
      const result = filterProductsBytype(typeOfProduct);

      const expectedValue = {
        type: actionTypes.FILTER_PRODUCTS,
        typeOfProduct: 'la',
      };
      expect(result).toEqual(expectedValue);
    });

    test('should reset filters', () => {
      const result = resetFilters();

      expect(result).toEqual({ type: 'RESET_FILTERS' });
    });

    test('should call dispatch with an error when axios throws error', async () => {
      axios.post = jest.fn().mockReturnValue(Promise.reject(Error('error msg')));
      const dispatch = jest.fn();

      await sendOrder('info')(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });

    test('should call dispatch with the order success', async () => {
      axios.post = jest.fn().mockReturnValue(Promise.resolve({ data: 2 }));
      const dispatch = jest.fn();

      await sendOrder('info')(dispatch);

      const expectedValue = {
        type: 'SEND_ORDER',
        newOrder: 2,
      };
      expect(dispatch).toHaveBeenCalledWith(expectedValue);
    });
  });
});
