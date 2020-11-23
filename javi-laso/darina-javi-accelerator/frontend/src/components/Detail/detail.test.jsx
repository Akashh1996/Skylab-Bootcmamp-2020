/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Detail from './Detail';

const buildStore = configureStore([thunk]);

describe('Detail', () => {
  let initialState;
  beforeEach(() => {

  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render h1', () => {
    initialState = { projectsReducer: { project: { description: 'jhj', price: 1, participants: {} } } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Detail match={{ params: {} }} />, { wrapper: Wrapper });
    expect(document.querySelector('h2').textContent).toBe('Search your job');
  });
});
