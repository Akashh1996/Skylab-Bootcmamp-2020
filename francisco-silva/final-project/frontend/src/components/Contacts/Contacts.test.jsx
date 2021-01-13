/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Simulate } from 'react-dom/test-utils';
import Contacts from './Contacts';
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
    const initialState = { productsReducers: { productList: 'asdasd' } };
    wrapper = wrapperFactory(initialState);
    render(<Contacts />, { wrapper });

    expect(document.getElementById('cntct-pdd')).toHaveTextContent('ENVIAR');
  });
  test('should dispatch on click call the function dispatch', () => {
    const initialState = { productsReducers: { productList: 'asdasd' } };
    wrapper = wrapperFactory(initialState);
    formAction.sendMessage = jest.fn();
    render(<Contacts />, { wrapper });
    document.getElementById('cntct-pdd').click();
    expect(formAction.sendMessage).toHaveBeenCalled();
  });

  test('should input change value on input name', () => {
    const initialState = { productsReducers: { productList: 'asdasd' } };
    wrapper = wrapperFactory(initialState);

    render(<Contacts />, { wrapper });
    const textAreaElement = document.getElementById('name');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on email', () => {
    const initialState = { productsReducers: { productList: 'asdasd' } };
    wrapper = wrapperFactory(initialState);

    render(<Contacts />, { wrapper });
    const textAreaElement = document.getElementById('email');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on subject', () => {
    const initialState = { productsReducers: { productList: 'asdasd' } };
    wrapper = wrapperFactory(initialState);

    render(<Contacts />, { wrapper });
    const textAreaElement = document.getElementById('subject');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on message', () => {
    const initialState = { productsReducers: { productList: 'asdasd' } };
    wrapper = wrapperFactory(initialState);

    render(<Contacts />, { wrapper });
    const textAreaElement = document.getElementById('message');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
});
