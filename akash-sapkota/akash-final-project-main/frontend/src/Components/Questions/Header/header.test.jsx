import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SecondHeader from './SecondHeader';

const buildStore = configureStore([thunk]);

describe('SecondHeader', () => {
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

  test('should render the component with text of button when there is user', () => {
    initialState = { userReducer: { user: 'akash' } };

    const userMock = {
      user: 'akash',
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);
    wrapper = wrapperFactory(initialState);

    render(<SecondHeader />, { wrapper });

    expect(document.querySelector('#add-question').textContent).toBe('Add Question +');
  });

  test('should send the user to add question page when user is logged in ', () => {
    initialState = { userReducer: { user: 'akash' } };
    const mProps = { history: { push: jest.fn() } };

    const userMock = {
      user: {
        displayName: 'akash',
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

    render(<SecondHeader />, { wrapper });
    const buttonElement = document.querySelector('#add-question');

    fireEvent.click(buttonElement);

    expect(mProps.history.push).toBeCalledWith('/add-question');
  });

  test('should Popup the modal if the user is not logged', () => {
    initialState = { userReducer: { user: null } };

    const userMock = {
      user: null,
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);
    wrapper = wrapperFactory(initialState);

    render(<SecondHeader />, { wrapper });
    const buttonElement = document.querySelector('#add-question');

    fireEvent.click(buttonElement);

    const alertElement = document.querySelector('#alert');
    expect(alertElement).toBeDefined();
  });

  test('should close the popup when user is not logged in ', () => {
    initialState = { userReducer: { user: null } };

    const userMock = {
      user: null,
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);
    wrapper = wrapperFactory(initialState);

    render(<SecondHeader />, { wrapper });
    const buttonElement = document.querySelector('#add-question');

    fireEvent.click(buttonElement);

    const buttonCloseElement = document.querySelector('#close-alert');

    fireEvent.click(buttonCloseElement);

    expect(buttonCloseElement).toBeDefined();
  });
});
