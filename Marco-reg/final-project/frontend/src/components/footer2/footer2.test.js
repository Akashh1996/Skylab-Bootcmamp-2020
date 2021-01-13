import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Footer2 from './Footer2';

describe('Header', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(

        <Footer2 />,

        container,
      );
    });
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('Should have a footer-wrapper', () => {
    expect(document.getElementById('footer-wrapper')).toBeDefined();
  });
});
