import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './Login';
import { signInWithGoogle, signOut, fetchUser } from '../../redux/actions/user-actions';

jest.mock('../../redux/actions/user-actions');

const buildStore = configureStore([thunk]);

describe('Login', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should signIn with Google', () => {
    const initialState = { usersReducer: { user: null }, isLogged: false };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Login />, { wrapper: Wrapper });
    document.querySelector('#btn-login').click();
    expect(signInWithGoogle).toHaveBeenCalled();
  });

  test('should signOut', () => {
    const userMock = {
      _id: 'someId',
    };
    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });
    JSON.parse = jest.fn().mockReturnValue(userMock);
    const initialState = { usersReducer: { user: { name: 'a_name' } }, isLogged: true };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    window.localStorage.getItem('user');

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Login />, { wrapper: Wrapper });
    document.querySelector('#btn-logout').click();
    expect(signOut).toHaveBeenCalled();
  });

  test('should call fetchUser', () => {
    const userMock = {
      _id: 'someId',
    };
    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });
    JSON.parse = jest.fn().mockReturnValue(userMock);
    const initialState = { usersReducer: {}, isLogged: false };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    window.localStorage.getItem('user');

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Login />, { wrapper: Wrapper });
    expect(fetchUser).toHaveBeenCalled();
  });
});
