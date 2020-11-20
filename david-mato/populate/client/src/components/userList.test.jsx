import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import UserList from './UserList';

jest.mock('../redux/actions/userListActions');

const initialState = { userList: [{ address: { country: '1' } }] };

const buildStore = configureStore([thunk]);

describe('UserList', () => {
  let Wrapper;
  beforeEach(() => {
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    // eslint-disable-next-line react/prop-types
    Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    render(<UserList />, { wrapper: Wrapper });
  });

  test('should render', () => {
    expect(document.querySelector('.title').textContent).toBe('USER LIST');
  });
});
