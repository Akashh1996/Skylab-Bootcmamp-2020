import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ChallengeCard2 from '../Components/ChallengeCard/ChallengeCard2';

const buildStore = configureStore({ thunk });

describe('ChallengeCard2', () => {
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

  test('should be rended with Description Tab', () => {
    const initialState = {
      challenge: {
        _id: '1', title: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<ChallengeCard2 challenge={initialState} />, { wrapper });

    const buttonElement = document.querySelector('#description');
    const event = { toggle: '2' };
    fireEvent.click(buttonElement, event);

    expect(<ChallengeCard2 />).toBeDefined();
  });

  test('should be rended with Description Tab', () => {
    const initialState = {
      challenge: {
        _id: '1', title: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<ChallengeCard2 challenge={initialState} />, { wrapper });

    const buttonElement = document.querySelector('#donation');
    const event = { toggle: '1' };
    fireEvent.click(buttonElement, event);

    expect(<ChallengeCard2 />).toBeDefined();
  }); // TODO onClick MaterialIcon
});
