import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DataList from '../Components/DataList/DataList';

const buildStore = configureStore({ thunk });

describe('DataList', () => {
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
      actions: { open: true },
    };

    wrapper = wrapperFactory(initialState);
    render(<DataList />, { wrapper });
    expect(<DataList />).toBeDefined();
  });

  //   test('should be rended closing the box', () => {
  //     const initialState = {
  //       actions: { open: false },
  //     };

//     wrapper = wrapperFactory(initialState);
//     render(<DrawerBox actions={initialState} />, { wrapper });
//     expect(<DrawerBox />).toBeDefined();
//   });
});
