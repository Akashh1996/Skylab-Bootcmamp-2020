/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Cart from './Cart';
import * as cartAction from '../../../redux/actions/productAction';

jest.mock('../../../redux/actions/productAction');

const buildStore = configureStore([thunk]);

describe('Forms testing', () => {
  let wrapper;

  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };
  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });
  test('should render submit button', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);
    render(<Cart />, { wrapper });

    expect(document.getElementById('pdr-btn')).toHaveTextContent('PEDIR');
  });

  xtest('should call putItemInCart on click', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);
    cartAction.putItemInCart = jest.fn();
    render(<Cart />, { wrapper });
    document.getElementById('cart-add-btn').click();
    expect(cartAction.putItemInCart).toHaveBeenCalled();
  });

  test('should map cartList', () => {
    const initialState = {
      cartReducer: {
        cartList: [
          {
            quantity: '2',
            product: [
              {
                category: 'Vegano',
              },
            ],
          },
        ],
      },
    };
    wrapper = wrapperFactory(initialState);
    render(<Cart />, { wrapper });
    const itemQtt = document.getElementById('itm-qtt');
    expect(itemQtt.textContent).toBe('2');
  });
});
