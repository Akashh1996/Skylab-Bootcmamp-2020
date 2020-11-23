/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { requestProjects } from '../../redux/actions/project-actions';
import ProjectListItem from './ProjectListItem';

jest.mock('../../redux/actions/project-actions');

const buildStore = configureStore([thunk]);

describe('ProjectListItem', () => {
  let initialState;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render the logo', () => {
    initialState = { projectsReducer: { } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<ProjectListItem />, { wrapper: Wrapper });
    expect(document.querySelector('.item-title').textContent).toBe('Search your job');
  });

  test('should call requestProjects if there is no projects', () => {
    initialState = { projectsReducer: { } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<ProjectListItem />, { wrapper: Wrapper });
    expect(requestProjects).toHaveBeenCalled();
  });

  test('should render the title of a project', () => {
    initialState = {
      projectsReducer: {
        projects: [{
          name: 'fakeName',
          description: 'fakeDesc',
          participants: [],
          categories: ['a'],
        }],
      },
    };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<ProjectListItem />, { wrapper: Wrapper });
    expect(document.querySelector('.project-header').textContent).toBe('fakeName');
  });

  test('should put the creator gitPicture if there is a creator', () => {
    initialState = {
      projectsReducer: {
        projects: [{
          name: 'fakeName',
          description: 'fakeDesc',
          participants: [],
          categories: ['a'],
          creator: { gitPicture: 'http://fake/abc' },
        }],
      },
    };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<ProjectListItem />, { wrapper: Wrapper });
    expect(document.querySelector('.creator-picture').src).toBe('http://fake/abc');
  });
});
