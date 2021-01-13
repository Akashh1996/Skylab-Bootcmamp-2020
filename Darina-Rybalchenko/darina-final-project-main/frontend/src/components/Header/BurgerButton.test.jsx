import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import BurgerButton from './BurgerButton';

jest.mock('../../redux/actions/user-actions');

const buildStore = configureStore([thunk]);

describe('BurgerButton', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should open menu', () => {
    const initialState = { usersReducer: { user: { name: 'a_name' } }, isLogged: true };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<BurgerButton />, { wrapper: Wrapper });

    const buttonElement = document.querySelector('#btn-test');
    const event = { currentTarget: buttonElement };
    fireEvent.click(buttonElement, event);

    expect(buttonElement).toBeInTheDocument();
  });

  test('should close menu', () => {
    const initialState = { usersReducer: { user: { name: 'a_name' } }, isLogged: true };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<BurgerButton />, { wrapper: Wrapper });

    const buttonElement = document.querySelector('#btn-test');
    fireEvent.click(buttonElement);
    const closeButtonElement = document.querySelector('#simple-menu');
    fireEvent.click(buttonElement);

    expect(closeButtonElement).toBeDefined();
  });

  test('should show link My Account', () => {
    const initialState = { usersReducer: { user: { name: 'a_name' } }, isLogged: true };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<BurgerButton />, { wrapper: Wrapper });
    const linkElement = document.querySelector('#link-myAccount');

    expect(linkElement).toBeInTheDocument();
  });

  test('should not show link My Account', () => {
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

    render(<BurgerButton />, { wrapper: Wrapper });
    const linkElement = document.querySelector('#link-myAccount');

    expect(linkElement).not.toBeInTheDocument();
  });
});
