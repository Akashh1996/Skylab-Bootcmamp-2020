/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Landing from './Landing';
import { addUserToParticipants } from '../../redux/actions/gitActions';

jest.mock('../../redux/actions/gitActions');

const buildStore = configureStore([thunk]);

describe('Landing', () => {
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

  [
    { selector: 'landing__project' },
  ].forEach(({ selector }) => {
    test(`should render a component with className ${selector}`, () => {
      const initialState = {
        gitReducer: {
          projectArray: [{
            _id: '1', url: '1', name: '1', description: '1', participants: [{ _id: '1' }], creator: '1',
          }],
        },
      };
      wrapper = wrapperFactory(initialState);

      render(<Landing />, { wrapper });
      console.log(document.getElementsByClassName(selector));
      expect(document.getElementsByClassName(selector)[0]).toBeDefined();
    });
    test('should render a h2 element', () => {
      const initialState = { gitReducer: { projectArray: [] } };
      wrapper = wrapperFactory(initialState);

      render(<Landing />, { wrapper });
      expect(document.querySelector('h2')).toBeDefined();
    });
  });

  test('should call addUserToParticipants when click', () => {
    const initialState = {
      gitReducer: {
        projectArray: [{
          _id: '1', url: '1', name: '1', description: '1', participants: [{ _id: '1' }], creator: '1',
        }],
      },
    };
    wrapper = wrapperFactory(initialState);

    render(<Landing />, { wrapper });
    document.getElementsByClassName('subscribe__button')[0].click();

    expect(addUserToParticipants).toHaveBeenCalled();
  });

  test('should render an h3 element when there are no participants', () => {
    const initialState = {
      gitReducer: {
        projectArray: [{
          _id: '1', url: '1', name: '1', description: '1', participants: [], creator: '1',
        }],
      },
    };
    wrapper = wrapperFactory(initialState);
    render(<Landing />, { wrapper });

    expect(document.querySelector('.h3')).toBeDefined();
  });
});
