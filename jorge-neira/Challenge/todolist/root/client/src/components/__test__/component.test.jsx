import React, { Children } from 'react';
import { render } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from '../../App';

const initialState = {};

const buildStore = configureStore([thunk]);

describe('App', () => {
  let Wrapper;
  beforeEach(() => {
    const store = buildStore(initialState);

    Wrapper = ({ Children }) => {
      <Provider store={store}>
        {Children}
      </Provider>;
    };
  });
  test('Test should render', () => {
    // arrange
    render(<App />, { wrapper: Wrapper });
    // act
    // assert
    expect(true).toBe(true);
  });
});
