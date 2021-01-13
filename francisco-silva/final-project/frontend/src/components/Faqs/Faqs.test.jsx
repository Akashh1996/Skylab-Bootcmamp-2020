import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

import Faqs from './Faqs';

describe('Faqs', () => {
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
  test('should render Faqs', () => {
    act(() => {
      render(<BrowserRouter><Faqs /></BrowserRouter>, container);
    });
    expect(<Faqs />).toBeDefined();
  });
});
