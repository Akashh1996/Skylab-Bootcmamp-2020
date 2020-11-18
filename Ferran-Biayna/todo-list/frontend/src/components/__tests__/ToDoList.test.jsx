import React from 'react';
import { act } from 'react-dom/test-utils';
import { Provider as ReduxProvider } from 'react-redux';
import { render, unmountComponentAtNode } from 'react-dom';
import configureStore from '../../store/configureStore';
import ToDoList from '../ToDoList';

const store = configureStore();

describe('ToDoList', () => {
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

  test('should be defined', () => {
    act(() => {
      render(
        <ReduxProvider store={store}>
          <ToDoList />
        </ReduxProvider>,
        container,
      );
    });
    expect(document.getElementsByClassName('list-container')[0]).toBeDefined();
  });
});
