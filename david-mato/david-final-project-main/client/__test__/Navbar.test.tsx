import React from 'react';
import 'react-native';
import { render, fireEvent } from '@testing-library/react-native';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Navbar from '../src/components/Navbar/Navbar';
import * as RootNavigation from '../RootNavigation';

jest.mock('../RootNavigation');

const buildStore = configureStore([thunk]);

describe('Navbar', () => {
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

  ['home', 'search', 'list', 'person', 'calendar'].forEach((iconName) => {
    it(`should call Rootnavigation.navigate when ${iconName} icon is pressed`, () => {
      const initialState = {};
      wrapper = wrapperFactory(initialState);

      const { getByTestId } = render(<Navbar />, { wrapper });
      const icon = getByTestId(iconName);
      fireEvent(icon, 'onPress');

      expect(RootNavigation.navigate).toHaveBeenCalled();
    });
  });
});
