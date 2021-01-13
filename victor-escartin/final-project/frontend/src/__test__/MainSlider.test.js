import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MainSlider from '../Components/MainSlider/MainSlider';

const buildStore = configureStore({ thunk });

describe('MainSlider', () => {
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

  test('should be rended when user signs in', () => {
    const initialState = {};

    wrapper = wrapperFactory(initialState);
    render(<MainSlider />, { wrapper });
    expect(<MainSlider />).toBeDefined();
  });
});
