import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { deleteInput } from '../redux/actions/actions';
import Principal from './Principal';

jest.mock('../redux/actions/actions');

const initialState = { inputsReducer: [{}] };

const buildStore = configureStore([thunk]);

describe('Principal', () => {
  let Wrapper;
  beforeEach(() => {
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    // eslint-disable-next-line react/prop-types
    Wrapper = ({ children }) => (
      <Provider store={store}>
        {children}
      </Provider>
    );
  });

  test('should render', () => {
    render(<Principal />, { wrapper: Wrapper });

    expect(document.querySelector('.title').textContent).toBe('Todo list');
  });

  test('should render', () => {
    render(<Principal />, { wrapper: Wrapper });
    document.querySelector('.button-delete').click();
    expect(deleteInput).toHaveBeenCalled();
  });
});
