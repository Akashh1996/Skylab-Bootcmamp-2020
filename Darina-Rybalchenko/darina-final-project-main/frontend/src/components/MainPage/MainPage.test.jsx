import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MainPage from './MainPage';

jest.mock('../../redux/actions/workout-actions');

const buildStore = configureStore([thunk]);

describe('MainPage', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render web description', () => {
    const initialState = { workoutReducer: { } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<MainPage />, { wrapper: Wrapper });
    const expectedText = document.querySelector('p');

    expect(expectedText).toBeInTheDocument();
  });
});
