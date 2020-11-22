/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { render, unmountComponentAtNode } from 'react-dom';
import Landing from './Landing';

describe('Landing', () => {
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

  test('should have projects charged', () => {
    act(() => {
      const projectList = {
        name: 'project',
      };
      const dispatch = jest.fn();

      render(
        <BrowserRouter>
          <Landing props={{ projectList, dispatch }} />
        </BrowserRouter>,
        container,
      );
    });

    expect(container.getElementsById('landing')).toBeDefined();
  });
});
