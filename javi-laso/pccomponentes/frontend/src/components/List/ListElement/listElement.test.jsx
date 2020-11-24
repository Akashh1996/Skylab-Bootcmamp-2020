import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ListElement from './ListElement';

describe('ListElement', () => {
  let container;
  let fakeItem;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    fakeItem = {
      id: '1',
      'product-image': '',
      'product-name': 'FakeX',
      'product-type': 'Monitor',
      manufacturer: 'Brand',
      price: '50',
    };
    act(() => {
      render(
        <BrowserRouter>
          <ListElement item={fakeItem} />
        </BrowserRouter>,
        container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  test('should render the title', () => {
    expect(container.querySelector('.card__title').textContent).toBe('Brand FakeX');
  });

  test('should render the type', () => {
    expect(container.querySelector('.card__type').textContent).toBe('Monitor');
  });

  test('should render the price', () => {
    expect(container.querySelector('.card__price').textContent).toBe('50€');
  });
});
