import axios from 'axios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {
  getProduct, getProducts, getProductsSucceed, getProductSucceed, getCartSucceed, getCartProducts,
  addToCart,
} from '../actions/marketActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore();

jest.mock('axios');

describe('marketActions', () => {
  describe('axios actions', () => {
    beforeEach(async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));
    });

    test('should call axios with getProducts', async () => {
      await store.dispatch(getProducts());
      expect(axios.get.mock.calls[0][0]).toMatch('http://localhost:5000/products');
    });

    test('should call axios with getProduct', async () => {
      const productId = 0;
      await store.dispatch(getProduct(productId));
      expect(axios.get.mock.calls[0][0]).toBe('http://localhost:5000/products/0');
    });

    test('should call axios with getCartProducts', async () => {
      await store.dispatch(getCartProducts());
      expect(axios.get.mock.calls[0][0]).toBe('http://localhost:5000/cart');
    });

    test('should call axios with addToCart', () => {
      const product = {};
      const response = addToCart(product);
      expect(response).toEqual({ type: 'ADD_TO_CART', cartProducts: [{}] });
    });
  });

  describe('Succeed Actions', () => {
    test('getProductsSucceed should return an object', () => {
      const products = {};
      const response = getProductsSucceed(products);
      expect(response).toEqual({ type: 'GET_PRODUCTS', products });
    });

    test('getProductSucceed should return an object', () => {
      const product = {};
      const response = getProductSucceed(product);
      expect(response).toEqual({ type: 'GET_PRODUCT', product });
    });

    test('getCartSucceed should return an object', () => {
      const cartProducts = [];
      const response = getCartSucceed(cartProducts);
      expect(response).toEqual({ type: 'GET_CART_PRODUCTS', cartProducts });
    });
  });
});
