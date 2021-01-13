import productsReducers from './productsReducers';
import actionTypes from '../actions/actionTypes';

describe('reducers', () => {
  let initialState;
  beforeEach(() => {
    initialState = {};
  });

  afterEach(() => {
    initialState = null;
  });

  describe('productsReducers', () => {
    test('should return the State without action', () => {
      const result = productsReducers(undefined, {});
      expect(result).toEqual({});
    });

    test('should add the products to the state', () => {
      const loadProductsAction = {
        type: actionTypes.LOAD_PRODUCTS,
        productList: 'productList',
      };

      const result = productsReducers(initialState, loadProductsAction);
      expect(result).toEqual({ productList: 'productList' });
    });

    test('should add the errorUser to the state', () => {
      const loadLoadProductsErrorAction = {
        type: actionTypes.LOAD_PRODUCTS_ERROR,
        error: 'error',
      };

      const result = productsReducers(initialState, loadLoadProductsErrorAction);
      expect(result).toEqual({ error: 'error' });
    });

    test('should add the product detail to the state', () => {
      const loadProductDetailAction = {
        type: actionTypes.LOAD_PRODUCT_DETAIL,
        productDetail: 'productDetail',
      };

      const result = productsReducers(initialState, loadProductDetailAction);
      expect(result).toEqual({ productDetail: 'productDetail' });
    });

    test('should filter products', () => {
      initialState = {
        productList: [{ category: ['Vegano', 'Sem açucar'] }, { category: ['Vegano'] }],
      };
      const resetFiltersAction = {
        type: actionTypes.FILTER_PRODUCTS,
        typeOfProduct: 'Sem açucar',
      };
      const result = productsReducers(initialState, resetFiltersAction);
      const expectedResult = {
        productList: [{ category: ['Vegano', 'Sem açucar'] }],
      };
      expect(result).toEqual(expectedResult);
    });

    test('should reset filters by category', () => {
      const resetFiltersAction = {
        type: actionTypes.RESET_FILTERS,
        productList: 'productList',
      };

      const result = productsReducers(initialState, resetFiltersAction);
      expect(result).toEqual({ productList: 'productList' });
    });

    test('should send message', () => {
      const resetFiltersAction = {
        type: actionTypes.SEND_MESSAGE,
        newMessage: 'newMessage',
      };

      const result = productsReducers(initialState, resetFiltersAction);
      expect(result).toEqual({ newMessage: 'newMessage' });
    });

    test('should send order', () => {
      const resetFiltersAction = {
        type: actionTypes.SEND_ORDER,
        newOrder: 'newOrder',
      };

      const result = productsReducers(initialState, resetFiltersAction);
      expect(result).toEqual({ newOrder: 'newOrder' });
    });
  });
});
