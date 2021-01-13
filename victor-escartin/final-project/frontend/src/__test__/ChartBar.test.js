import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import ChartBar from '../Components/ChartBar/ChartBar';

const buildStore = configureStore({ thunk });

describe('ChartBar', () => {
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
      challenges: [
        {
          id: '1', title: 'title1', collected: 'collected1', target: 'target1',
        },
        {
          id: '2', title: 'title2', collected: 'collected2', target: 'target2',
        },
      ],
    };

    wrapper = wrapperFactory(initialState);
    render(<ChartBar challenges={initialState.challenges} />, { wrapper });
    expect(<ChartBar />).toBeDefined();
  });
});
