import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { deleteItemFromCart, putItemInCart } from '../../../redux/actions/actions';
import '@testing-library/jest-dom';
import CartElement from './CartElement';

jest.mock('../../../redux/actions/actions');

const initialState = { };

const buildStore = configureStore([thunk]);

describe('CartElement', () => {
  beforeEach(() => {
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    // eslint-disable-next-line react/prop-types
    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<CartElement product={{ product: { 'product-name': 'fakeName', manufacturer: 'ABC' }, quantity: 1 }} />, { wrapper: Wrapper });
  });

  test('should render the title', () => {
    expect(document.querySelector('.cart-element__title').textContent).toBe('ABC fakeName');
  });

  test('should call loadItemsList action', () => {
    document.querySelector('#delete-btn').click();
    expect(deleteItemFromCart).toHaveBeenCalled();
  });

  test('click "Add to cart" button should call putItemInCart action', () => {
    document.querySelector('#add-btn').click();
    expect(putItemInCart).toHaveBeenCalled();
  });
});
