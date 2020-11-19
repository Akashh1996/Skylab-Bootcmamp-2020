import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider as ReduxProvider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import configureStore from '../store/configureStore';
import Users from '../components/Users';

describe('Users', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('usersList=undefined - User.jsx should be defined', () => {
    const store = configureStore();
    act(() => {
      render(
        <ReduxProvider store={store}>
          <Users />
        </ReduxProvider>,
        container,
      );
    });
    expect(document.getElementsByClassName('list-container')[0]).toBeDefined();
  });

  test('usersList=[] - User.jsx should be defined', () => {
    const usersList = [{ address: { country: {} } }];
    const store = configureStore({
      usersReducer: {
        usersList,
      },
    });

    act(() => {
      render(
        <ReduxProvider store={store}>
          <Users />
        </ReduxProvider>,
        container,
      );
    });

    expect(container.getElementsByClassName('list-container')[0]).toBeDefined();
  });
});
