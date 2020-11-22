/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import UserLogin from './UserLogin.jsx';

describe('Buttons', () => {
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

  test('should have a login button', () => {
    act(() => {
      const user = false;
      const setUser = jest.fn();

      render(
        <BrowserRouter>
          <UserLogin props={{ user, setUser }} />
        </BrowserRouter>,
        container,
      );
    });

    expect(container.getElementsByClassName('landing__header--user-logged')[0].innerHTML).toBe('<button type="button" class="login-button">LOG IN</button>');
  });

  test('should have a login button', () => {
    act(() => {
      const user = true;
      const setUser = jest.fn();

      render(
        <BrowserRouter>
          <UserLogin props={{ user, setUser }} />
        </BrowserRouter>,
        container,
      );
    });

    expect(container.getElementsByClassName('landing__header--user-nologged')[0].innerHTML).toBe('<button type="button" class="logout-button">LOG OUT</button><p></p><i class="fa fa-user"></i>');
  });
});
