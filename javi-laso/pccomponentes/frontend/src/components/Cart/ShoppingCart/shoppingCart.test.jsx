/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import ShoppingCart from './ShoppingCart';

jest.mock('../../../redux/actions/actions');

const buildStore = configureStore([thunk]);

describe('ShoppingCart', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });
  test('should render', () => {
    const initialState = { cartReducer: { cartList: [{ product: { 'product-type': 'fake' }, quantity: 1 }], cartSize: 1 } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<ShoppingCart />, { wrapper: Wrapper });
    expect(document.querySelector('.cart-element__type').textContent).toBe('fake');
  });

  test('should render "no products" when there are no products"', () => {
    const initialState = { cartReducer: { cartList: [], cartSize: 0 } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<ShoppingCart />, { wrapper: Wrapper });
    expect(document.querySelector('.no-products').textContent).toBe('You have not chosen products yet');
  });

  test('should render if some product has no quantity', () => {
    const initialState = {
      cartReducer: {
        cartList: [
          { product: {}, quantity: 0 },
          { product: {}, quantity: 1 },
        ],
        cartSize: 1,
      },
    };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<ShoppingCart />, { wrapper: Wrapper });
    expect(document.querySelector('h1').textContent).toBe('Your products');
  });
});
