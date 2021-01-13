import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DrawerBox from '../Components/DrawerBox/DrawerBox';

const buildStore = configureStore({ thunk });

describe('DrawerBox', () => {
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

  test('should be rended opening the box', () => {
    const initialState = {
      actions: { open: true },
    };

    wrapper = wrapperFactory(initialState);
    render(<DrawerBox actions={initialState} />, { wrapper });
    expect(<DrawerBox />).toBeDefined();
  });

  test('should be rended closing the box', () => {
    const initialState = {
      actions: { open: false },
    };

    wrapper = wrapperFactory(initialState);
    render(<DrawerBox actions={initialState} />, { wrapper });
    expect(<DrawerBox />).toBeDefined();
  });
});
