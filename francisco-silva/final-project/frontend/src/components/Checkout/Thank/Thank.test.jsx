/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import Thank from './Thank';
import { deleteAllFromCart } from '../../../redux/actions/productAction';

jest.mock('../../../redux/actions/productAction');
const buildStore = configureStore([thunk]);

describe('thank', () => {
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
  test('should render button on click', () => {
    const initialState = {};

    wrapper = wrapperFactory(initialState);
    render(<Thank/>, { wrapper });
    document.getElementById('test-id').click();
    expect(deleteAllFromCart).toHaveBeenCalled();
  });
});
