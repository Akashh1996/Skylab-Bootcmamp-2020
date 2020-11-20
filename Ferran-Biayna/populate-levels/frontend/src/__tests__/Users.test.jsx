import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider as ReduxProvider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import configureStore from '../store/configureStore';
import NewUsers from '../components/NewUsers';

describe('NewUsers', () => {
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

  test('NewUsersList=undefined - User.jsx should be defined', () => {
    const store = configureStore();
    act(() => {
      render(
        <ReduxProvider store={store}>
          <NewUsers />
        </ReduxProvider>,
        container,
      );
    });
    expect(document.getElementsByClassName('list-container')[0]).toBeDefined();
  });

  test('NewUsersList=[] - User.jsx should be defined', () => {
    const NewUsersList = [{ address: { country: {} } }];
    const store = configureStore({
      NewUsersReducer: {
        NewUsersList,
      },
    });

    act(() => {
      render(
        <ReduxProvider store={store}>
          <NewUsers />
        </ReduxProvider>,
        container,
      );
    });

    expect(container.getElementsByClassName('list-container')[0]).toBeDefined();
  });
});
