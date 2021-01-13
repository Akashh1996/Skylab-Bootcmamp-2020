// @ts-nocheck
import reducer from '../src/redux/reducers/groceryListReducer';
import actionTypes from '../src/redux/actions/actionTypes';

describe('groceryListReducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'string', product: {}, productName: 'string' })).toEqual([]);
  });

  it('should handle GET_PRODUCT_TYPE', () => {
    expect(
      reducer([], {
        type: actionTypes.GET_PRODUCT_TYPE,
        product: ['Banana'],
      }),
    ).toEqual(['Banana']);
  });

  it('should handle DELETE_PRODUCT', () => {
    expect(
      reducer([{ product: 'banana' }, { product: 'apple' }], {
        type: actionTypes.DELETE_PRODUCT,
        productName: 'banana',
      }),
    ).toEqual([{ product: 'apple' }]);
  });

  it('should handle DELETE_ALL_PRODUCTS', () => {
    expect(
      reducer([], {
        type: actionTypes.DELETE_ALL_PRODUCTS,
      }),
    ).toEqual([]);
  });
});
