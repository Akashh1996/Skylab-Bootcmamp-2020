import { render, unmountComponentAtNode } from 'react-dom';
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
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
      render(<BrowserRouter><Footer /></BrowserRouter>, container);
    });

    expect(container.querySelector('#about').textContent).toBe('Tour of heroes');
  });
});
