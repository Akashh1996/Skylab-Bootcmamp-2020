import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CardBoxInfo from '../Components/CardBoxInfo/CardBoxInfo';

const buildStore = configureStore({ thunk });

describe('ChallengeCard', () => {
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

  test('should be rended', () => {
    const initialState = {
      challenge: {
        _id: '1', title: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<CardBoxInfo challenge={initialState} />, { wrapper });
    expect(<CardBoxInfo />).toBeDefined();
  });
});
