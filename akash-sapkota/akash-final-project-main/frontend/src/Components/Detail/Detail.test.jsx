/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Detail from './Detail';

const buildStore = configureStore([thunk]);

describe('Detail', () => {
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

  test('should render the component with date', () => {
    initialState = {
      questionReducer: { questionDetail: { date: '10 june 2020' } },
      userReducer: { user: null },
    };
    wrapper = wrapperFactory(initialState);

    render(<Detail match={{ params: { questionId: '12' } }} />, { wrapper });
    expect(document.querySelector('.date').textContent).toBe('10 june 2020');
  });

  test('should render the component answer form', () => {
    initialState = {
      questionReducer: { questionDetail: { date: '10 june 2020' } },
      userReducer: { user: null },
    };

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

    render(<Detail match={{ params: { questionId: '12' } }} />, { wrapper });

    expect(document.querySelector('.answer-form-section')).toBeInTheDocument();
  });
});
