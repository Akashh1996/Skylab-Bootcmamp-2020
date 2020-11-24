import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Details from '../Details';

jest.mock('../../../redux/actions/actions');

const initialState = { itemsReducer: { item: { id: '1', 'product-type': 'Monitor', inches: '27"' } } };

const buildStore = configureStore([thunk]);

describe('ItemList', () => {
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

    render(<Details match={{ params: { itemId: 1 } }} />, { wrapper: Wrapper });
  });

  test('should render the inches if product-type is "Monitor"', () => {
    expect(document.querySelector('.monitor__size').textContent).toBe('Screen size: 27"');
  });
});
