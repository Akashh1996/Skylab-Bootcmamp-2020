import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import NotFound from './NotFound';

describe('NotFound', () => {
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
  test('should render NotFound', () => {
    act(() => {
      render(<NotFound />, container);
    });
    expect(<NotFound />).toBeDefined();
  });
});
