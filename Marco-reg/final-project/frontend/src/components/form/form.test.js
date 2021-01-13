/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Simulate } from 'react-dom/test-utils';
import Form from './Form';
import * as formAction from '../../redux/actions/formAction';

jest.mock('../../redux/actions/formAction');

const buildStore = configureStore([thunk]);

describe('Forms testing', () => {
  let wrapper;

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
  test('should render submit button', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<Form />, { wrapper });

    expect(document.getElementById('submit-form')).toHaveTextContent('SUBMIT');
  });
  test('should dispatch on click call the function dispatch', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    formAction.createProject = jest.fn();
    render(<Form />, { wrapper });
    document.getElementById('submit-form').click();
    expect(formAction.createProject).toHaveBeenCalled();
  });
  test('should input change value on projectName', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    render(<Form />, { wrapper });
    const textAreaElement = document.getElementById('project-name');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on projectInfo', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    render(<Form />, { wrapper });
    const textAreaElement = document.getElementById('project-info');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on projectPhoto', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    render(<Form />, { wrapper });
    const textAreaElement = document.getElementById('project-photo');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on project-lng', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    render(<Form />, { wrapper });
    const textAreaElement = document.getElementById('project-lat');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on projectlng', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    render(<Form />, { wrapper });
    const textAreaElement = document.getElementById('project-lng');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
  test('should input change value on project-location', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);

    render(<Form />, { wrapper });
    const textAreaElement = document.getElementById('project-location');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBe('hey');
  });
});
