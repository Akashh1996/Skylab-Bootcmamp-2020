/* eslint-disable react/prop-types */
import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './Header';

const initialState = {};
const buildStore = configureStore([thunk]);

describe('Header', () => {
  let wrapper;
  beforeEach(() => {
    const store = buildStore(initialState);
    store.dispatch = jest.fn();
    wrapper = ({ children }) => (<Provider>{children}</Provider>);
    render(
      <Header />, { wrapper },
    );
  });
  test('shoul render', () => {
    expect(document.querySelector('navbar-brand').textContent).toBe('GITHUB PROJECTS');
  });
});
