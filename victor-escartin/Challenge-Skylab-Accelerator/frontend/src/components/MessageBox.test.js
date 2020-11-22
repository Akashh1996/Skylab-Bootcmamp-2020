/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MessageBox from './MessageBox';

describe('Project', () => {
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

  it('should render MessageBox', () => {
    act(() => {
      render(<MessageBox />, container);
    });
    expect(document.querySelector('div')).toBeDefined();
  });
});
