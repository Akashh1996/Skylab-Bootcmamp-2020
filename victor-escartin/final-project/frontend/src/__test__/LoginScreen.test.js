import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import LoginScreen from '../views/LoginScreen/LoginScreen';

jest.mock('./../redux/actions/challenge-actions.js');
const buildStore = configureStore([thunk]);
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('loginScreen', () => {
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

  test('should waiting loaded data to render the compo', () => {
    const initialState = {
      loading: true,
      active: false,
      user: {},
    };

    wrapper = wrapperFactory(initialState);
    render(<LoginScreen />, { wrapper });
    expect(<LoginScreen />).toBeDefined();
  });
  // TODO props.history.push
});
