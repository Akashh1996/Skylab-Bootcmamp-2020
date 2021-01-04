/* eslint-disable react/jsx-filename-extension */
import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import MoviesList from '../MoviesList';

describe('Header', () => {
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

  test('should have title', async () => {
    await act(async () => {
      render(<BrowserRouter><MoviesList /></BrowserRouter>, container);
    });

    expect(container.querySelector('button').textContent).toBe('Modificar');
  });
});
