import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import WorkoutSlider from './WorkoutSlider';

const buildStore = configureStore([thunk]);

describe('WorkoutSlider', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render', () => {
    const initialState = {};
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<WorkoutSlider />, { wrapper: Wrapper });
    const expectedText = document.querySelector('.carousel-title');

    expect(expectedText).toBeInTheDocument('Stretching');
  });

  test('should render', () => {
    const initialState = {};
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<WorkoutSlider />, { wrapper: Wrapper });
    const selectElement = document.querySelector('.carousel-container');
    fireEvent.select(selectElement);

    expect(selectElement).toBeDefined();
  });
});
