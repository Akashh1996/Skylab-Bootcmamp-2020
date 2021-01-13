import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MobileMenu from './MobileMenu';

describe('MobileMenu', () => {
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
  test('should render header', () => {
    act(() => {
      render(<MobileMenu />, container);
    });
    expect(<MobileMenu />).toBeDefined();
  });
});
