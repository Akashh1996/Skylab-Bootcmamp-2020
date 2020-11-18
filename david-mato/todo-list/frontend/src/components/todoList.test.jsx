import React from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import { deleteTodoListItem, addTodoListItem } from '../redux/actions/todoListActions';

jest.mock('../redux/actions/todoListActions');

const initialState = { todoList: [{}] };

const buildStore = configureStore([thunk]);

describe('TodoList', () => {
  let Wrapper;
  beforeEach(() => {
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    // eslint-disable-next-line react/prop-types
    Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
    render(<TodoList />, { wrapper: Wrapper });
  });

  test('should render', () => {
    expect(document.querySelector('.title').textContent).toBe('TODO LIST');
  });

  test('should call deleteTodoListItem on click', () => {
    document.querySelector('.delete-button').click();
    expect(deleteTodoListItem).toHaveBeenCalled();
  });

  test('should call deleteTodoListItem on click', () => {
    document.querySelector('.add-button').click();
    expect(addTodoListItem).toHaveBeenCalled();
  });
});
