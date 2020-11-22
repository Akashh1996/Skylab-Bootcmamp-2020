/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { getUserFromGithub, logOutUser } from '../../redux/actions/user-actions';
import Header from './Header';

jest.mock('../../redux/actions/user-actions');

const buildStore = configureStore([thunk]);

describe('Header', () => {
  let initialState;
  beforeEach(() => {

  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render the logo', () => {
    initialState = { usersReducer: { user: null } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Header />, { wrapper: Wrapper });
    expect(document.querySelector('.logo-name').textContent).toBe('SkyLab Accelerator');
  });

  test('should render login button if there is no user', () => {
    initialState = { usersReducer: { user: null } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Header />, { wrapper: Wrapper });
    expect(document.querySelector('.login-btn').textContent).toBe('Github Login');
  });

  test('logout button should call logOutUser', () => {
    initialState = { usersReducer: { user: { name: 'fakeName' } } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Header />, { wrapper: Wrapper });

    document.querySelector('.logout-btn').click();
    expect(logOutUser).toHaveBeenCalled();
  });

  test('should call getUserFromGithub if there is a code in window.location', () => {
    const searchUrl = '?code=1234';
    Object.defineProperty(window, 'location', {
      value: {
        search: searchUrl,
      },
    });

    initialState = { usersReducer: { user: { name: 'fakeName' } } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Header />, { wrapper: Wrapper });

    expect(getUserFromGithub).toHaveBeenCalled();
  });
});
