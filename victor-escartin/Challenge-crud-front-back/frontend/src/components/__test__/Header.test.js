/* eslint-disable react/jsx-filename-extension */
import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

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
      render(<BrowserRouter><Header /></BrowserRouter>, container);
    });

    expect(container.querySelector('h1').textContent).toBe('HOME- LISTADO PELÍCULAS');
  });
});
