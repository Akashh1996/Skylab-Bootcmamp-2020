import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import UserProfile from './UserProfile';

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

  test('should render the component answer form', () => {
    initialState = {
      userReducer: {
        userQuestion: [{
          questionTitle: 'what is react',
          owner: {
            _id: 'id',
            photo: 'url',
          },
          answers: [{
            user: {
              photo: 'photoUrl',
            },
            answerDescription: 'abc',
          }],
        }],
      },
    };

    const userMock = {
      user: 'akash',
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);
    wrapper = wrapperFactory(initialState);

    render(<UserProfile match={{
      params: {
        userId: 'id',
      },
    }}
    />, { wrapper });

    expect(document.querySelector('.question-title').textContent).toBe('what is react');
  });

  test('should render the component answer form', () => {
    initialState = {
      userReducer: {
        userQuestion: [],
      },
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

    render(<UserProfile match={{
      params: {
        userId: 'id',
      },
    }}
    />, { wrapper });

    expect(document.querySelector('.user-email').textContent).toBe('akash');
  });

  test('should render the component answer form', () => {
    initialState = {
      userReducer: {
        userQuestion: [{
          questionTitle: 'what is react',
          owner: {
            _id: 'id',
            photo: 'url',
          },
          answers: [],
        }],
      },
    };

    const userMock = {
      user: 'akash',
    };

    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };

    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });

    JSON.parse = jest.fn().mockReturnValue(userMock);
    wrapper = wrapperFactory(initialState);

    render(<UserProfile match={{
      params: {
        userId: 'id',
      },
    }}
    />, { wrapper });

    expect(document.querySelector('no-answers-user').textContent).toBe('There Are No Answers Yet');
  });
});
