/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import MainPage from './MainPage';

describe('Header', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    act(() => {
      render(

        <MainPage />,

        container,
      );
    });
  });
  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  it('Should have a top-part', () => {
    expect(document.getElementById('top-part')).toBeDefined();
  });
});
