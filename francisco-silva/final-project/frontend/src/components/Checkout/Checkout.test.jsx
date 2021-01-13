/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Simulate } from 'react-dom/test-utils';
import Checkout from './Checkout';
import * as formAction from '../../redux/actions/productAction';

jest.mock('../../redux/actions/productAction');

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
    render(<Checkout />, { wrapper });

    expect(document.getElementById('fzr-pdd')).toHaveTextContent('FAZER PEDIDO');
  });

  test('should input change value on input name', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);

    render(<Checkout />, { wrapper });
    const textAreaElement = document.getElementById('name');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on email', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);

    render(<Checkout />, { wrapper });
    const textAreaElement = document.getElementById('email');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on address', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);

    render(<Checkout />, { wrapper });
    const textAreaElement = document.getElementById('address');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on phoneNumber', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);

    render(<Checkout />, { wrapper });
    const textAreaElement = document.getElementById('phoneNumber');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on postalCode', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);

    render(<Checkout />, { wrapper });
    const textAreaElement = document.getElementById('postalCode');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });

  test('should call the function sendOrder on click', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);
    render(<Checkout />, { wrapper });
    const fzrButton = document.getElementById('fzr-pdd');
    fireEvent.click(fzrButton);

    const envButton = document.getElementById('env-pdd');
    fireEvent.click(envButton);

    expect(formAction.sendOrder).toHaveBeenCalled();
  });

  test('should open dialog on click', () => {
    const initialState = { cartReducer: { cartList: [] } };
    wrapper = wrapperFactory(initialState);
    render(<Checkout />, { wrapper });
    const fzrButton = document.getElementById('fzr-pdd');
    fireEvent.click(fzrButton);

    const dialog = document.getElementById('dialog-modal');

    expect(dialog).toBeDefined();
  });

  test('should map cartList', () => {
    const initialState = {
      cartReducer: {
        cartList: [
          {
            quantity: '2 ',
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
    render(<Checkout />, { wrapper });
    const itemQtt = document.getElementById('itm-qtt');
    expect(itemQtt.textContent).toBe('2 ');
  });
});
