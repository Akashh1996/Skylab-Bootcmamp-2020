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

  [
    { selector: '.logo-name', value: 'SkyLab Accelerator' },
    { selector: '.login-btn', value: 'Github Login' },
  ].forEach(({ selector, value }) => {
    test(`should render ${selector} with text content ${value}`, () => {
      const initialState = { usersReducer: { user: null } };
      wrapper = wrapperFactory(initialState);

      render(<Header />, { wrapper });
      expect(document.querySelector(selector).textContent).toBe(value);
    });
  });

  test('logout button should call logOutUser', () => {
    const initialState = { usersReducer: { user: { name: 'fakeName' } } };
    wrapper = wrapperFactory(initialState);

    render(<Header />, { wrapper });

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
    const initialState = { usersReducer: { user: { name: 'fakeName' } } };
    wrapper = wrapperFactory(initialState);

    render(<Header />, { wrapper });

    expect(getUserFromGithub).toHaveBeenCalled();
  });
});
