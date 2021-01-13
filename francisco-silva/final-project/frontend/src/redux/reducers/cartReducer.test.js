import cartReducer from './cartReducer';
import actionTypes from '../actions/actionTypes';

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
      cartList: [{ product: {}, quantity: 2 }, { product: {}, quantity: 0 }],
      cartSize: 2,
    });
  });

  test('DELETE_ITEM_FROM_CART should not reduce cartSize below 0', () => {
    const fakeAction = {
      type: actionTypes.DELETE_ITEM_FROM_CART,
      cartItem: { product: {}, quantity: 1 },
    };

    expect(cartReducer({ cartList: fakeCartList, cartSize: 0 }, fakeAction)).toEqual({
      cartList: [{ product: {}, quantity: 2 }, { product: {}, quantity: 0 }],
      cartSize: 0,
    });
  });
});
