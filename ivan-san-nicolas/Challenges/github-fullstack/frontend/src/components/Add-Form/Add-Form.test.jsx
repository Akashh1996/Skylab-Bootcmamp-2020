import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AddForm from './AddForm';
import { sendForm } from '../../redux/actions/gitActions';

jest.mock('../../redux/actions/gitActions');

const buildStore = configureStore([thunk]);

describe('Add-Form', () => {
  let wrapper = null;
  const wrapperFactory = (wrapperInitialState) => {
    const store = buildStore(wrapperInitialState);
    store.dispatch = jest.fn();
    return ({ children }) => {
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>;
    };
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('should render a form', () => {
    const dispatch = jest.fn();
    const initialState = { };
    wrapper = wrapperFactory(initialState);

    render(<AddForm />, { wrapper });

    expect(document.querySelector('.add-form__container')).toBeDefined();
  });
});
