/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { unmountComponentAtNode, render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import TodoList from './TodoLIst';

describe('TodoList', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <BrowserRouter>
          <TodoList />
        </BrowserRouter>,
        container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should have Enter a new name', () => {
    expect(container.querySelector('input_todo').textContent).toBe('Enter a new name');
  });
});
