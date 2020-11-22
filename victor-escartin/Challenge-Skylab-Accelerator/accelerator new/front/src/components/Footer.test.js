/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';

describe('Footer', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(
        <BrowserRouter>
          <Footer />
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

  it('Should have a footer', () => {
    expect(container.getElementsByClassName('footer-container')[0]).toBeDefined();
  });
});
