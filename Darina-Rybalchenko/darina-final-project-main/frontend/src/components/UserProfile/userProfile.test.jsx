import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserProfile from './UserProfile';
import { fetchUser } from '../../redux/actions/user-actions';

jest.mock('../../redux/actions/user-actions');

const buildStore = configureStore([thunk]);

describe('UserProfile', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render', () => {
    const initialState = {
      usersReducer: {},
    };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<UserProfile match={{ params: { userId: '1' } }} />, { wrapper: Wrapper });
    const expectedText = document.querySelector('.booking-title-text');

    expect(expectedText.textContent).toBe('Booked classes:');
  });

  test('should make the request to get the users details', () => {
    const initialState = {
      usersReducer: {},
    };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<UserProfile match={{ params: { userId: '1' } }} />, { wrapper: Wrapper });

    expect(fetchUser).toHaveBeenCalled();
  });

  test('should print booked clases', () => {
    const initialState = {
      usersReducer: {
        user: {
          days: [{ date: '1', workout: '2', time: '3' }], photoURL: 'a_photo', displayName: 'a_name', email: 'an_email',
        },
      },
    };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<UserProfile match={{ params: { userId: '1' } }} />, { wrapper: Wrapper });

    expect(fetchUser).toHaveBeenCalled();
  });
});
