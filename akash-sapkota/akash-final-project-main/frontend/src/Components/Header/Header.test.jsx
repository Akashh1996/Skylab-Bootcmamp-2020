import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './Header';
import { signInWithGoogle, signOut, loadUserQuestion } from '../../redux/actions/userAction';

jest.mock('../../redux/actions/userAction');
const buildStore = configureStore([thunk]);

describe('Header', () => {
  let initialState;
  let wrapper;
  let wrapperFactory;
  beforeEach(() => {
    wrapperFactory = (wrapperInitialState) => {
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
  });

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('should render the compo with text of button', () => {
    initialState = { userReducer: { user: null } };
    wrapper = wrapperFactory(initialState);

    render(<Header />, { wrapper });
    expect(document.querySelector('#button-login').textContent).toBe('Sign in');
  });

  test('should call the dispatch action when user logs in', () => {
    initialState = {
      userReducer: { user: null },
    };
    wrapper = wrapperFactory(initialState);

    render(<Header />, { wrapper });

    const buttonElement = document.querySelector('#button-login');

    fireEvent.click(buttonElement);

    expect(signInWithGoogle).toHaveBeenCalled();
  });

  test('should call the dispatch action when user logs out', () => {
    initialState = {
      userReducer: { user: null },
    };

    const userMock = {
      user: {
        _id: 'someId',
      },
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);

    wrapper = wrapperFactory(initialState);

    render(<Header />, { wrapper });

    const buttonElement = document.querySelector('#button-logOut');

    fireEvent.click(buttonElement);

    expect(signOut).toHaveBeenCalled();
  });

  test('should call the dispatch action when user clicks on avatar', () => {
    initialState = {
      userReducer: { user: null },
    };

    const userMock = {
      user: {
        photo: 'photoURL',
        userId: '_id',
      },
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);

    wrapper = wrapperFactory(initialState);

    render(<Header />, { wrapper });

    const buttonElement = document.querySelector('#user-photo');

    fireEvent.click(buttonElement);

    expect(loadUserQuestion).toHaveBeenCalled();
  });
});
