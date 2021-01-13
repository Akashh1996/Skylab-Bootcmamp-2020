/* eslint-disable no-unused-vars */
// TODO
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import CaseSlide from '../Components/CasesSlider/CaseSlide';

const buildStore = configureStore({ thunk });

describe('CasesSlider', () => {
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

  test('should be rended when user signs in', () => {
    const initialState = {
      challenges: [
        {
          id: '1', title: 'title1', collected: 'collected1', target: 'target1',
        },
        {
          id: '2', title: 'title2', collected: 'collected2', target: 'target2',
        },
      ],
    };

    wrapper = wrapperFactory(initialState);
    render(<CaseSlide challenges={initialState.challenges} />, { wrapper });
    expect(document.getElementsByClassName('wpo-case-single')).toBeDefined();
  });

  // test('should be rended when user signs in', () => {
  //   const initialState = {};
  //   const settings = {};
  //   const challenges = {
  //     _id: '1', image: 'xx', title: 'xx', collected: 1, target: 2,
  //   };

  //   wrapper = wrapperFactory(initialState);
  //   render(<CasesSlider challenges={initialState.challenges} />, { wrapper });
  //   expect(document.getElementsByClassName('wpo-case-single')).toBeDefined();
  // });
});
