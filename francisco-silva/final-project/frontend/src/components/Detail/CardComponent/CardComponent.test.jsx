/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import CardComponent from './CardComponent';

jest.mock('../../../redux/actions/productAction');

const buildStore = configureStore([thunk]);

xdescribe('Forms testing', () => {
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
    const initialState = { };
    wrapper = wrapperFactory(initialState);
    render(<CardComponent />, { wrapper });

    expect(document.getElementById('test-btn')).toHaveTextContent('+ ADICIONAR AO MEU PEDIDO');
  });
});
