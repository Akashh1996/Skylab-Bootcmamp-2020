import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);

    const userMock = {
      _id: 'someId',
    };
    const localStorage = {
      getItem: jest.fn().mockReturnValue(userMock),
    };
    Object.defineProperty(window, 'localStorage', {
      value: localStorage,
    });
    JSON.parse = jest.fn().mockReturnValue(userMock);

    act(() => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>,
        container,
      );
    });
  });

  test('Should render without crashing', () => {
    expect(document.getElementById('test-btn')).toBeDefined();
  });
});
