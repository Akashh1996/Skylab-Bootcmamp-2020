/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import RandomSpot from './RandomSpot';

jest.mock('../../redux/actions/listActions');

const buildStore = configureStore([thunk]);

describe('RandomSpot', () => {
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
  test('should render compo ', () => {
    const initialState = { listReducer: { user: 'Anacleto' } };
    wrapper = wrapperFactory(initialState);
    render(<RandomSpot />, { wrapper });

    expect(document.getElementById('spot-random-wrapper')).toBeDefined();
  });
  test('should render compo ', () => {
    const initialState = { listReducer: { user: 'Anacleto' } };

    wrapper = wrapperFactory(initialState);
    render(<RandomSpot />, { wrapper });

    expect(document.getElementById('random-link')).toBeDefined();
  });
});
