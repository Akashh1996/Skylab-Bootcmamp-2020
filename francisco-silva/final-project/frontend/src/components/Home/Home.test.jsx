import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Home from './Home';

describe('Home', () => {
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
  test('should render Home', () => {
    act(() => {
      render(<Home />, container);
    });
    expect(<Home />).toBeDefined();
  });
});
