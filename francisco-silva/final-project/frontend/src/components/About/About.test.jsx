import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import { act } from 'react-dom/test-utils';
import About from './About';

describe('About', () => {
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
  test('should render about', () => {
    act(() => {
      render(<About />, container);
    });
    expect(<About />).toBeDefined();
  });
});
