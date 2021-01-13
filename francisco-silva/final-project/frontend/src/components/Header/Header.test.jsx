/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Header from './Header';

import * as loginUserWithGoogle from '../../redux/actions/loginUserWithGoogle';

jest.mock('../../firebase/signinWithGoogle');
jest.mock('../../redux/actions/loginUserWithGoogle');

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

  test('should trigger login ', () => {
    const initialState = { authReducer: { user: {} } };
    loginUserWithGoogle.loginUserWithGoogle = jest.fn();
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });
    document.getElementById('login').click();
    expect(loginUserWithGoogle.loginUserWithGoogle).toHaveBeenCalled();
  });

  xtest('should trigger login 2 ', () => {
    const initialState = { authReducer: { user: undefined } };
    loginUserWithGoogle.loginUserWithGoogle = jest.fn();
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });
    document.getElementById('login').click();
    expect(loginUserWithGoogle.loginUserWithGoogle).toHaveBeenCalled();
  });
});
