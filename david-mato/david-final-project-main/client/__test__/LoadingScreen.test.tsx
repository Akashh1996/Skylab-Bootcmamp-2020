import React from 'react';
import 'react-native';
import { render } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import LoadingScreen from '../src/components/Login/LoadingScreen';

let mockvalue = true;
jest.mock('firebase', () => ({
  auth: jest.fn()
    .mockImplementation(() => ({
      onAuthStateChanged: jest.fn()
        .mockImplementation((callback) => { callback(mockvalue); }),
    })),
}));

const buildStore = configureStore([thunk]);

describe('LoadingScreen', () => {
  const navigation = { goBack: jest.fn(), navigate: jest.fn() };
  let wrapper;

  const wrapperFactory = (wrapperInitialState : object) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();

    return ({ children } : { children: JSX.Element }) => (
      <Provider store={store}>
        {children}
      </Provider>
    );
  };

  it('should render when loadingComponent is defined and user is true', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    const { getByTestId } = render(
      <LoadingScreen navigation={navigation} />,
      { wrapper },
    );
    const loadingComponent = getByTestId('loadingComponent');
    mockvalue = false;

    expect(loadingComponent).toBeDefined();
  });

  it('should render when loadingComponent is defined and user is false', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    const { getByTestId } = render(
      <LoadingScreen navigation={navigation} />,
      { wrapper },
    );
    const loadingComponent = getByTestId('loadingComponent');
    mockvalue = true;

    expect(loadingComponent).toBeDefined();
  });
});
