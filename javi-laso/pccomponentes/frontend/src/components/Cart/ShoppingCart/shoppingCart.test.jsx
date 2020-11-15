import React from 'react';
import { act } from 'react-dom/test-utils';
import { screen } from '@testing-library/react';
import { render } from '../../../test-utils/render';
import '@testing-library/jest-dom';
import ShoppingCart from './ShoppingCart';

describe('ShoppinCart', () => {
  test('should render without items', () => {
    act(() => {
      render(<ShoppingCart />,
        { initialState: { } });
    });

    expect(screen.getByText(/You have not chosen products yet/i)).toBeInTheDocument();
  });

  test('should render with items', () => {
    act(() => {
      render(<ShoppingCart />,
        { initialState: { cartReducer: { cartList: { 1: [{ id: '1', 'product-type': 'fake' }], 2: [] }, cartSize: 1 } } });
    });

    expect(screen.getByText(/fake/i)).toBeInTheDocument();
  });
});
