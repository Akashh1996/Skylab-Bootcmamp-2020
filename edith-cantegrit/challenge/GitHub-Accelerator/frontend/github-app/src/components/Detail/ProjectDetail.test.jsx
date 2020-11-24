/* eslint-disable react/prop-types */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
// import { loadProject } from '../../redux/actions/projectActions';
import ProjectDetail from './ProjectDetail';

jest.mock('../../redux/actions/projectActions');
const builtStore = configureStore([thunk]);
describe('ProjectDetail', () => {
  let wrapper;

  const wrapperFactory = (wrapperInitialState) => {
    const store = builtStore(wrapperInitialState);
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
  test('should render h1 with text content Projects', () => {
    const initialState = { projectReducer: { projectDetail: null } };
    wrapper = wrapperFactory(initialState);
    render(<ProjectDetail match={{ params: { projectId: null } }} />, { wrapper });
    expect(document.getElementById('sectionDetail')).toHaveTextContent('Projects');
  });
});
