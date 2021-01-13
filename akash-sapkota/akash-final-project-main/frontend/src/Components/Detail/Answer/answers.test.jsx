/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Answers from './Answers';
import * as actions from '../../../redux/actions/answerAction';

const buildStore = configureStore([thunk]);

describe('Answers', () => {
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

  test('should render the Answer component ', () => {
    initialState = {
      questionReducer: {
        questionDetail: {
          answers: [{
            user: {
              displayName: 'Akash',
            },
          }],
        },
      },
      userReducer: {
        user: null,
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<Answers />, { wrapper });

    expect(document.querySelector('.owner-name').textContent).toBe('Akash ');
  });

  test('should call the delete actions ', () => {
    initialState = {
      questionReducer: {
        questionDetail: {
          answers: [{
            user: {
              _id: 'id',
            },
          }],
        },

      },
      userReducer: {
        user: null,
      },
    };
    wrapper = wrapperFactory(initialState);

    const userMock = {
      user: {
        _id: 'id',
      },
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);
    actions.deleteAnswer = jest.fn();
    render(<Answers />, { wrapper });
    const buttonElement = document.querySelector('#delete-botton');

    fireEvent.click(buttonElement);

    expect(actions.deleteAnswer).toHaveBeenCalled();
  });
});
