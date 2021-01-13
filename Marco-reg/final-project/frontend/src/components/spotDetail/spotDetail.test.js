/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import { BrowserRouter } from 'react-router-dom';

import SpotDetail from './SpotDetail';
import { loginUserWithGoogle, signoutUser } from '../../redux/actions/authAction';
import signinWithGoogle from '../../firebase/firebaseMethod';

jest.mock('../../redux/actions/userActions');

const buildStore = configureStore([thunk]);

describe('UserDetail', () => {
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
    const initialState = { spotReducer: { user: 'asdasd' } };
    wrapper = wrapperFactory(initialState);
    render(<SpotDetail />, { wrapper });

    expect(document.getElementById('carousel-size')).toBeDefined();
  });
});
