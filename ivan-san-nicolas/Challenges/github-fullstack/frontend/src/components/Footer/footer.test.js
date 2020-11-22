import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import Footer from './Footer.jsx';

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

  test('should have a p', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Footer />
        </BrowserRouter>,
        container,
      );
    });

    expect(container.querySelector('p').textContent).toBe('This is a project made with redux for the client side, and Github API, Express and MongoDb for the server side');
  });
});
