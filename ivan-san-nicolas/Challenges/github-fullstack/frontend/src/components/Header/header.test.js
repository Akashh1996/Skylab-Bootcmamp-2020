/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import Header from './Header.jsx';

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

  test('should have a h1 title', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
        container,
      );
    });

    expect(container.querySelector('h1').textContent).toBe('Skylab Accelerator    ');
  });
});
