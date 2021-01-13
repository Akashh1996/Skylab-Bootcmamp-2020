/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import * as actions from '../../../redux/actions/productAction';

import ListComponent from './ListComponent';

jest.mock('../../../redux/actions/productAction');

const buildStore = configureStore([thunk]);

describe('List compo testing', () => {
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

  test('should call isChecked on click', () => {
    const initialState = { productsReducers: { productList: [] }, cartReducer: { cartList: [] } };

    wrapper = wrapperFactory(initialState);
    render(<ListComponent />, { wrapper });
    const inputVegano = document.getElementById('vegano');

    fireEvent.click(inputVegano);

    expect(actions.filterProductsBytype).toHaveBeenCalled();
  });

  test('should call resetFilters on click', () => {
    const initialState = { productsReducers: { productList: [] }, cartReducer: { cartList: [] } };

    wrapper = wrapperFactory(initialState);
    render(<ListComponent />, { wrapper });
    const inputVegano = document.getElementById('vegano');

    fireEvent.click(inputVegano);
    fireEvent.click(inputVegano);

    expect(actions.resetFilters).toHaveBeenCalled();
  });

  test('should call isChecked on click', () => {
    const initialState = { productsReducers: { productList: [] }, cartReducer: { cartList: [] } };

    wrapper = wrapperFactory(initialState);
    render(<ListComponent />, { wrapper });
    const inputVegano = document.getElementById('lactose');

    fireEvent.click(inputVegano);

    expect(actions.filterProductsBytype).toHaveBeenCalled();
  });

  test('should call isChecked on click', () => {
    const initialState = { productsReducers: { productList: [] }, cartReducer: { cartList: [] } };

    wrapper = wrapperFactory(initialState);
    render(<ListComponent />, { wrapper });
    const inputVegano = document.getElementById('gluten');

    fireEvent.click(inputVegano);

    expect(actions.filterProductsBytype).toHaveBeenCalled();
  });
  test('should call isChecked on click', () => {
    const initialState = { productsReducers: { productList: [] }, cartReducer: { cartList: [] } };

    wrapper = wrapperFactory(initialState);
    render(<ListComponent />, { wrapper });
    const inputVegano = document.getElementById('açucar');

    fireEvent.click(inputVegano);

    expect(actions.filterProductsBytype).toHaveBeenCalled();
  });
});
