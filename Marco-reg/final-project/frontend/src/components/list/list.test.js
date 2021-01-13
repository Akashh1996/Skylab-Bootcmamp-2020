/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import List from './List';

jest.mock('../../redux/actions/listActions');

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
    const initialState = { listReducer: { user: 'pepo' } };
    wrapper = wrapperFactory(initialState);
    render(<List />, { wrapper });

    expect(document.getElementById('list_wrapper')).toBeDefined();
  });
  test('should render Link button to home', () => {
    const initialState = { listReducer: { user: 'pepo' } };
    wrapper = wrapperFactory(initialState);
    render(<List />, { wrapper });

    expect(document.getElementById('list_wrapper')).toBeDefined();
  });
});
