import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './Header';

jest.mock('../../redux/actions/workout-actions');
jest.mock('../../redux/actions/user-actions');

const buildStore = configureStore([thunk]);

describe('Header', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render logo', () => {
    const initialState = { usersReducer: { user: { name: 'a_name' } } };
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
    const expectedElement = document.querySelector('img');

    expect(expectedElement).toBeInTheDocument();
  });

  test('should show classes when clicked', () => {
    const initialState = { usersReducer: { user: { name: 'a_name' } } };
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
    const buttonElement = document.querySelector('.link__classes');
    const event = { currentTarget: buttonElement };
    fireEvent.click(buttonElement, event);
    fireEvent.click(buttonElement, event);

    expect(buttonElement).toBeInTheDocument();
  });
});
