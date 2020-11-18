import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from './actions';
import actionTypes from './action-types';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

const listUrl = 'http://localhost:2130/';
const shoppingCartUrl = 'http://localhost:2130/shoppingcart';

describe('FrontEnd actions', () => {
  let fakeData;
  describe('loadItemsSuccess', () => {
    test('should return action with type LOAD_ITEMS_LIST', () => {
      expect(actions.loadItemsSuccess(null).type).toBe(actionTypes.LOAD_ITEMS_LIST);
    });
  });

  describe('loadItemsList', () => {
    beforeEach(async () => {
      fakeData = { data: { id: 1 } };
      axios.get.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.loadItemsList());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalledWith(listUrl);
    });
  });

  describe('loadItemSuccess', () => {
    test('should return action with type LOAD_ITEM', () => {
      expect(actions.loadItemSuccess(null).type).toBe(actionTypes.LOAD_ITEM);
    });
  });

  describe('loadItem', () => {
    let fakeId;
    beforeEach(async () => {
      fakeData = { data: { id: 1 } };
      fakeId = 1;
      axios.get.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.loadItem(fakeId));
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalledWith(`${listUrl}${fakeId}`);
    });
  });

  describe('loadCartSuccess', () => {
    test('should return action with type LOAD_SHOPPING_CART', () => {
      expect(actions.loadCartSuccess(null).type).toBe(actionTypes.LOAD_SHOPPING_CART);
    });
  });

  describe('loadShoppingCart', () => {
    beforeEach(async () => {
      fakeData = { data: { id: 1 } };
      axios.get.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.loadShoppingCart());
    });

    test('should call axios', () => {
      expect(axios.get).toHaveBeenCalledWith(shoppingCartUrl);
    });
  });

  describe('putItemCartSuccess', () => {
    test('should return action with type PUT_ITEM_IN_CART', () => {
      expect(actions.putItemCartSuccess(null).type).toBe(actionTypes.PUT_ITEM_IN_CART);
    });
  });

  describe('putItemInCart', () => {
    beforeEach(async () => {
      fakeData = { data: { id: 1 } };
      axios.patch.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.putItemInCart(fakeData));
    });

    test('should call axios', () => {
      expect(axios.patch).toHaveBeenCalledWith(shoppingCartUrl, { item: fakeData });
    });
  });

  describe('deleteItemCartSuccess', () => {
    test('should return action with type DELETE_ITEM_FROM_CART', () => {
      expect(actions.deleteItemCartSuccess(null).type).toBe(actionTypes.DELETE_ITEM_FROM_CART);
    });
  });

  describe('deleteItemFromCart', () => {
    let config;
    beforeEach(async () => {
      fakeData = { data: { id: 1 } };
      config = { data: 'abc' };
      axios.delete.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.deleteItemFromCart('abc'));
    });

    test('should call axios', () => {
      expect(axios.delete).toHaveBeenCalledWith(shoppingCartUrl, config);
    });
  });

  describe('filterItems', () => {
    test('should return action with type FILTER_ITEMS', () => {
      expect(actions.filterItems(null).type).toBe(actionTypes.FILTER_ITEMS);
    });
  });
});
