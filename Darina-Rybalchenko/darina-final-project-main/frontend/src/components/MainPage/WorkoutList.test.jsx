import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import WorkoutList from './WorkoutList';
import { requestWorkouts } from '../../redux/actions/workout-actions';

jest.mock('../../redux/actions/workout-actions');

const buildStore = configureStore([thunk]);

describe('WorkoutList', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render workout name', () => {
    const initialState = { workoutReducer: { workouts: [{ name: 'a_name', description: 'a_description', price: 1 }] } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<WorkoutList />, { wrapper: Wrapper });
    const expectedText = document.querySelector('[data-testid="workout-name"]');

    expect(expectedText.textContent).toBe('a_name');
  });

  test('should make the request to get workout list', () => {
    const initialState = { workoutReducer: {} };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<WorkoutList />, { wrapper: Wrapper });

    expect(requestWorkouts).toHaveBeenCalled();
  });
});
