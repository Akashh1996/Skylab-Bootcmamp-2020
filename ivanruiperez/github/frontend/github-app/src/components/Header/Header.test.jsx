/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loginUser } from '../../redux/actions/projectActions';
import Header from './Header';

jest.mock('../../redux/actions/projectActions');
const builtStore = configureStore([thunk]);
describe('Header', () => {
  let wrapper;
  const wrapperFactory = (wrapperInitialState) => {
    const store = builtStore(wrapperInitialState);
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
  test('should render login button with text content Login', () => {
    const initialState = { projectReducer: { login: null } };
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });
    expect(document.getElementById('login')).toHaveTextContent('Login');
  });
  test('should render button action on click', () => {
    const initialState = { projectReducer: { login: null } };
    wrapper = wrapperFactory(initialState);
    render(<Header />, { wrapper });
    document.getElementById('login').click();
    expect(loginUser).toHaveBeenCalled();
  });
});
