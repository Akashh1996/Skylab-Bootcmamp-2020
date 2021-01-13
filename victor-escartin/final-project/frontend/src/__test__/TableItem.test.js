import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import TableItem from '../Components/MaterialTable/TableItem';

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
    const initialState = [
      {
        _id: '1', creator: 'xx', title: 'xx', collected: 1, target: 2, data: 'xx',
      },
      {
        _id: '2', creator: 'xx2', title: 'xx2', collected: 1, target: 2, data: 'xx',
      },
    ];

    wrapper = wrapperFactory(initialState);
    render(<TableItem challenges={initialState} />, { wrapper });
    expect(<TableItem />).toBeDefined();
  });
});
