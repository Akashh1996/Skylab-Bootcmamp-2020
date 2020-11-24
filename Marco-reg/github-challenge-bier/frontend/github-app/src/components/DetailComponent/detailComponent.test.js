/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import ProjectDetail from './DetailComponent';
import { requestProjectDetail } from '../../redux/actions/listActions';

jest.mock('../../redux/actions/listActions');

const buildStore = configureStore([thunk]);

describe('Detail test', () => {
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
  test('should render project info', () => {
    const initialState = {
      listReducers: {
        projectDetail: {
          projectName: '', projectInfo: '', projectOwner: '', photo: '',
        },
      },
    };
    wrapper = wrapperFactory(initialState);
    render(<ProjectDetail match={{ params: { id: '123' } }} />, { wrapper });

    expect(document.getElementById('back-btn')).toHaveTextContent('back');
  });
  test('should call requestProjectDetail', () => {
    const initialState = {
      listReducers: {
        projectDetail: {
          projectName: '', projectInfo: '', projectOwner: '', photo: '', match: { params: '' },
        },
      },
    };
    wrapper = wrapperFactory(initialState);
    render(<ProjectDetail match={{ params: { id: '123' } }} />, { wrapper });

    expect(requestProjectDetail).toHaveBeenCalled();
  });
  test('should not call requestProjectDetail on missing id', () => {
    const initialState = {
      listReducers: {
        projectDetail: {
          projectName: '', projectInfo: '', projectOwner: '', photo: '', match: { params: '' },
        },
      },
    };
    wrapper = wrapperFactory(initialState);
    render(<ProjectDetail match={{ params: {} }} />, { wrapper });

    expect(requestProjectDetail).toHaveBeenCalledTimes(0);
  });
});
