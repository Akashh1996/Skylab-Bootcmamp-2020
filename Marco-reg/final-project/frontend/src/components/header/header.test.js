/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import * as authAction from '../../redux/actions/authAction';
import Header from './Header';

jest.mock('../../firebase/firebaseMethod');

const buildStore = configureStore([thunk]);

describe('List', () => {
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
  test('should render Link button to home', () => {
    const initialState = { authReducer: { user: {} } };
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });

    expect(document.getElementById('logo-spot')).toBeDefined();
  });
  test('should render Header', () => {
    const initialState = { authReducer: { user: {} } };
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });

    expect(document.getElementById('logo-spot')).toBeDefined();
  });
  test('should trigger login ', () => {
    const initialState = { authReducer: { user: {} } };
    authAction.signoutUser = jest.fn();
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });
    document.getElementById('login').click();
    expect(authAction.signoutUser).toHaveBeenCalled();
  });
  test('should trigger login 2 ', () => {
    const initialState = { authReducer: { user: undefined } };
    authAction.loginUserWithGoogle = jest.fn();
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });
    document.getElementById('login').click();

    expect(authAction.loginUserWithGoogle).toHaveBeenCalled();
  });
});
