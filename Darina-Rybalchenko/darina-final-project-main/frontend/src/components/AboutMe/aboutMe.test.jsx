import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AboutMe from './AboutMe';

const buildStore = configureStore([thunk]);

describe('UserProfile', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render', () => {
    const initialState = { userReducer: { } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<AboutMe />, { wrapper: Wrapper });
    const expectedText = document.querySelector('h1');

    expect(expectedText).toBeInTheDocument('About Me');
  });
});
