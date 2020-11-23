/* eslint-disable react/prop-types */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Detail from './Detail';
import { changeColor } from '../../redux/actions/gitActions';

jest.mock('../../redux/actions/gitActions');

const buildStore = configureStore([thunk]);

describe('Detail', () => {
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

  test('should render detail section', () => {
    const initialState = {
      gitReducer: {
        projectItem: { property: 'null' },
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<Detail />, { wrapper });

    expect(document.querySelector('.detail')).toBeDefined();
  });

  test('should call changeColor when click on subscribe-button', () => {
    const initialState = {
      gitReducer: {
        projectItem: { property: 'null' },
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<Detail />, { wrapper });
    document.querySelector('.subscribe__button').click();

    expect(changeColor).toHaveBeenCalled();
  });
});
