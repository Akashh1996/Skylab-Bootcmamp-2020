import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { loadItemsList } from '../../../redux/actions/actions';
import '@testing-library/jest-dom';
import ItemList from './ItemList';

jest.mock('../../../redux/actions/actions');

const buildStore = configureStore([thunk]);

describe('ItemList', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  test('should render the title', () => {
    const initialState = { itemsReducer: { itemList: [{ id: '1' }] } };
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

    render(<ItemList />, { wrapper: Wrapper });

    expect(document.querySelector('.list-title').textContent).toBe('Principal offers');
  });

  test('should call loadItemsList action if the list is empty', () => {
    const initialState = { itemsReducer: { itemList: null } };
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

    render(<ItemList />, { wrapper: Wrapper });

    expect(loadItemsList).toHaveBeenCalled();
  });

  test('should render if there is a filteredList', () => {
    const initialState = { itemsReducer: { filteredList: [{}] } };
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

    render(<ItemList />, { wrapper: Wrapper });

    expect(document.querySelector('.list-title').textContent).toBe('Principal offers');
  });
});
