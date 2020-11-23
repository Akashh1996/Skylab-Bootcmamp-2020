/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Detail from './Detail';
import { requestProjectDetail } from '../../redux/actions/project-actions';

jest.mock('../../redux/actions/project-actions');

const buildStore = configureStore([thunk]);

describe('Detail', () => {
  let initialState;
  beforeEach(() => {

  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render h1', () => {
    initialState = { projectsReducer: { project: { description: 'abc', price: 1, participants: {} } } };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Detail match={{ params: {} }} />, { wrapper: Wrapper });
    expect(document.querySelector('h2').textContent).toBe('Search your job');
  });

  test('should call requestProjectDetail ', () => {
    initialState = { projectsReducer: {} };
    const store = buildStore(initialState);
    store.dispatch = jest.fn();

    const Wrapper = ({ children }) => (
      <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
      </Provider>
    );

    render(<Detail match={{ params: {} }} />, { wrapper: Wrapper });
    expect(requestProjectDetail).toHaveBeenCalled();
  });

  test('should slice ', () => {
    initialState = {
      projectsReducer:
      {
        project: {
          description: { length: 311, slice: jest.fn() }, price: 1, participants: {},
        },
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

    render(<Detail match={{ params: {} }} />, { wrapper: Wrapper });
    expect(initialState.projectsReducer.project.description.slice).toHaveBeenCalled();
  });
});
