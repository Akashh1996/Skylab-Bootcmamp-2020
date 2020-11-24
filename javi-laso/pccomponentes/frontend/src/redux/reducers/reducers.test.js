import cartReducer from './cartReducer';
import itemsReducer from './itemsReducer';
import actionTypes from '../actions/action-types';

describe('cartReducer', () => {
  let fakeCartList;

  beforeEach(() => {
    fakeCartList = [{ product: {}, quantity: 2 }, { product: {}, quantity: 0 }];
  });

  test('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(
      { cartList: [], cartSize: 0 },
    );
  });

  test('should handle LOAD_SHOPPING_CART', () => {
    const fakeAction = {
      type: actionTypes.LOAD_SHOPPING_CART,
      cartList: fakeCartList,
    };

    expect(cartReducer({}, fakeAction)).toEqual({
      cartList: fakeCartList,
      cartSize: 2,
    });
  });

  test('PUT_ITEM_IN_CART should up quantity in one', () => {
    const fakeAction = {
      type: actionTypes.PUT_ITEM_IN_CART,
      cartItem: { product: {}, quantity: 3 },
    };

    expect(cartReducer({ cartList: fakeCartList, cartSize: 3 }, fakeAction)).toEqual({
      cartList: [{ product: {}, quantity: 3 }, { product: {}, quantity: 0 }],
      cartSize: 4,
    });
  });

  test('PUT_ITEM_IN_CART should add the product', () => {
    const fakeAction = {
      type: actionTypes.PUT_ITEM_IN_CART,
      cartItem: { product: { _id: 'abc' }, quantity: 1 },
    };

    expect(cartReducer({ cartList: fakeCartList, cartSize: 3 }, fakeAction)).toEqual({
      cartList: [{ product: {}, quantity: 2 }, { product: {}, quantity: 0 }, { product: { _id: 'abc' }, quantity: 1 }],
      cartSize: 4,
    });
  });

  test('DELETE_ITEM_FROM_CART should down quantity in one', () => {
    const fakeAction = {
      type: actionTypes.DELETE_ITEM_FROM_CART,
      cartItem: { product: {}, quantity: 1 },
    };

    expect(cartReducer({ cartList: fakeCartList, cartSize: 3 }, fakeAction)).toEqual({
      cartList: [{ product: {}, quantity: 1 }, { product: {}, quantity: 0 }],
      cartSize: 2,
    });
  });

  test('DELETE_ITEM_FROM_CART should not reduce cartSize below 0', () => {
    const fakeAction = {
      type: actionTypes.DELETE_ITEM_FROM_CART,
      cartItem: { product: {}, quantity: 1 },
    };

    expect(cartReducer({ cartList: fakeCartList, cartSize: 0 }, fakeAction)).toEqual({
      cartList: [{ product: {}, quantity: 1 }, { product: {}, quantity: 0 }],
      cartSize: 0,
    });
  });
});

describe('itemsReducer', () => {
  const fakeList = [{ id: 1, 'product-type': 'fake' }];
  const fakeItem = { id: 1 };
  test('should return the initial state', () => {
    expect(itemsReducer(undefined, {})).toEqual({});
  });

  test('should handle LOAD_ITEMS_LIST', () => {
    const fakeAction = {
      type: actionTypes.LOAD_ITEMS_LIST,
      itemList: fakeList,
    };

    expect(itemsReducer({}, fakeAction)).toEqual({
      itemList: fakeList,
      productTypes: ['fake'],
    });
  });

  test('should handle LOAD_ITEM', () => {
    const fakeAction = {
      type: actionTypes.LOAD_ITEM,
      item: fakeItem,
    };

    expect(itemsReducer({}, fakeAction)).toEqual({
      item: fakeItem,
    });
  });

  test('FILTER_ITEMS should return all the list if there is no productType', () => {
    const fakeAction = {
      type: actionTypes.FILTER_ITEMS,
    };

    expect(itemsReducer({ itemList: [{ 'product-type': 'fake1' }] }, fakeAction)).toEqual({
      filteredList: [{ 'product-type': 'fake1' }],
      itemList: [{ 'product-type': 'fake1' }],
    });
  });

  test('FILTER_ITEMS should filter the list if there is productType', () => {
    const fakeAction = {
      type: actionTypes.FILTER_ITEMS,
      productType: 'fake1',
    };

    expect(itemsReducer({ itemList: [{ 'product-type': 'fake1' }, { 'product-type': 'fake2' }] }, fakeAction)).toEqual({
      filteredList: [{ 'product-type': 'fake1' }],
      itemList: [{ 'product-type': 'fake1' }, { 'product-type': 'fake2' }],
    });
  });
});
