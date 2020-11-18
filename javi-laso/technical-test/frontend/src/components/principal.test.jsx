/* eslint-disable react/prop-types */
import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { deleteInput, addInput } from '../redux/actions/actions';
import Principal from './Principal';

jest.mock('../redux/actions/actions');

let Wrapper;
describe('Principal', () => {
  afterEach(() => {
    cleanup();
  });
  describe('render Principal with a list', () => {
    beforeEach(() => {
      const initialState = { inputsReducer: [{}] };
      const buildStore = configureStore([thunk]);
      const store = buildStore(initialState);
      store.dispatch = jest.fn();
      Wrapper = ({ children }) => (
        <Provider store={store}>
          {children}
        </Provider>
      );
      render(<Principal />, { wrapper: Wrapper });
    });

    test('should render', () => {
      expect(document.querySelector('.title').textContent).toBe('Todo list');
    });

    test('should call deleteInput action when clic in delete button', () => {
      document.querySelector('.button-delete').click();
      expect(deleteInput).toHaveBeenCalled();
    });

    test('should call addInput action when clic in submit button', () => {
      document.querySelector('#submit-button').click();
      expect(addInput).toHaveBeenCalled();
    });

    test('should change value of input text erasing spaces', () => {
      const event = { target: { value: '  newValue  ' } };
      const inputText = document.querySelector('#input-text');
      fireEvent.change(inputText, event);
      expect(inputText.value).toBe('newValue');
    });
  });

  describe('render Principal without a list', () => {
    beforeEach(() => {
      const initialState = { inputsReducer: [] };
      const buildStore = configureStore([thunk]);
      const store = buildStore(initialState);
      store.dispatch = jest.fn();

      Wrapper = ({ children }) => (
        <Provider store={store}>
          {children}
        </Provider>
      );
    });

    test('should render', () => {
      render(<Principal />, { wrapper: Wrapper });

      expect(document.querySelector('.title').textContent).toBe('Todo list');
    });
  });
});
