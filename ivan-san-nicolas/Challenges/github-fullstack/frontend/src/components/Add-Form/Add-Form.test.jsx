/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
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

    return ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );
  };

  afterEach(() => {
    jest.restoreAllMocks();
    wrapper = null;
  });

  test('should render a form', () => {
    wrapper = wrapperFactory();

    render(<AddForm />, { wrapper });

    expect(document.querySelector('.add-form__container')).toBeDefined();
  });

  test('should call sendForm when there is a click in create-button', () => {
    wrapper = wrapperFactory({ gitReducer: { projectArray: [] } });

    render(<AddForm />, { wrapper });
    document.querySelector('.create-button').click();

    expect(sendForm).toHaveBeenCalled();
  });

  test('should call window.history.back when there is a click in cancel-button', () => {
    wrapper = wrapperFactory({ gitReducer: { projectArray: [] } });
    window.history.back = jest.fn();
    render(<AddForm />, { wrapper });
    document.querySelector('.cancel-button').click();

    expect(window.history.back).toHaveBeenCalled();
  });

  test('should call changeProperty when there is a change in projectDescription', () => {
    wrapper = wrapperFactory({ gitReducer: { projectArray: [] } });
    window.history.back = jest.fn();
    render(<AddForm />, { wrapper });
    const descriptionInput = document.getElementById('project-description');
    descriptionInput.onchange('50');
    expect(descriptionInput.value).toBe('50');
  });
});
