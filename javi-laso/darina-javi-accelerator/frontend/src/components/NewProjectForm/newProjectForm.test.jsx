/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NewProjectForm from './NewProjectForm';
import { createProject } from '../../redux/actions/project-actions';

jest.mock('../../redux/actions/project-actions');

const buildStore = configureStore([thunk]);

describe('NewProjectForm', () => {
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

  test('should render h1', () => {
    const initialState = { projectsReducer: { projects: [] }, usersReducer: { user: { name: 'fakeName' } } };
    wrapper = wrapperFactory(initialState);

    render(<NewProjectForm />, { wrapper });
    expect(document.querySelector('h1').textContent).toBe('Create new project');
  });

  test('should  call createProject', () => {
    const initialState = { projectsReducer: { projects: [] }, usersReducer: { user: { name: 'fakeName' } } };
    wrapper = wrapperFactory(initialState);

    render(<NewProjectForm />, { wrapper });
    document.querySelector('#test-btn-submit').click();
    expect(createProject).toHaveBeenCalled();
  });

  ['title', 'categories', 'github', 'price', 'description'].forEach((element) => {
    test(`should change inputText-${element}`, () => {
      const initialState = { projectsReducer: { projects: [] }, usersReducer: { user: { name: 'fakeName' } } };
      wrapper = wrapperFactory(initialState);

      render(<NewProjectForm />, { wrapper });
      const event = { target: { value: 'abc' } };
      const inputText = document.querySelector(`[data-testid="inputText-${element}"]`);

      fireEvent.change(inputText, event);

      expect(inputText.value).toBe('abc');
    });
  });
});
