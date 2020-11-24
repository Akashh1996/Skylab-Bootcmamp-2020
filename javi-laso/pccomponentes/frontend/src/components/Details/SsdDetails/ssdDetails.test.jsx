import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import '@testing-library/jest-dom';
import Details from '../Details';

jest.mock('../../../redux/actions/actions');

const initialState = { itemsReducer: { item: { id: '1', 'product-type': 'SSD Hard Disk', 'capacity-gb': '8' } } };

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

  test('should render the SSD capacity if product-type is "SSD Hard Disk"', () => {
    expect(document.querySelector('.ssd__capacity').textContent).toBe('Capacity: 8 GB');
  });
});
