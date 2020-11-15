import cartReducer from './cartReducer';
import itemsReducer from './itemsReducer';
import actionTypes from '../actions/action-types';

describe('cartReducer', () => {
  const fakeData = { 1: [{ id: 1 }], 2: [{ id: 2 }] };
  test('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(
      { cartList: {}, cartSize: 0 },
    );
  });

  test('should handle LOAD_SHOPPING_CART', () => {
    const fakeAction = {
      type: actionTypes.LOAD_SHOPPING_CART,
      cartList: fakeData,
    };

    expect(cartReducer({}, fakeAction)).toEqual({
      cartList: fakeData,
      cartSize: 2,
    });
  });

  test('should handle PUT_ITEM_IN_CART', () => {
    const fakeAction = {
      type: actionTypes.PUT_ITEM_IN_CART,
      cartList: fakeData,
    };

    expect(cartReducer({}, fakeAction)).toEqual({
      cartList: fakeData,
      cartSize: 2,
    });
  });

  test('should handle DELETE_ITEM_FROM_CART', () => {
    const fakeAction = {
      type: actionTypes.DELETE_ITEM_FROM_CART,
      cartList: fakeData,
    };

    expect(cartReducer({}, fakeAction)).toEqual({
      cartList: fakeData,
      cartSize: 2,
    });
  });
});

describe('itemsReducer', () => {
  const fakeList = [{ id: 1 }];
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
});
