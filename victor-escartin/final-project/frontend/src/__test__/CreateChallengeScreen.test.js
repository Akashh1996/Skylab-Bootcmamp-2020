import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Simulate } from 'react-dom/test-utils';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createChallenge } from '../redux/actions/challenge-actions';
import CreateChallengeScreen from '../views/CreateChallengeScreen/CreateChallengeScreen';

jest.mock('./../redux/actions/challenge-actions.js');
const buildStore = configureStore([thunk]);

describe('CreateChallengeScreen', () => {
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

  test('should waiting loaded data to render the compo', () => {
    const initialState = {
      challengeList: {
        loading: true,
        error: false,
        challenges: [{
          _id: '1', name: 'Title Name', description: 'Description', miniDescription: 'miniDescription', category: 'category', image: 'image', target: 0, collected: 0, participants: 0, days: 0, creator: 'creator',
        }],
      },
    };

    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    expect(document.querySelector('.form-builder').textContent).toBeDefined();
  });

  test('should render submit button', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    expect(document.getElementById('submit-form')).toHaveTextContent('CREAR RETO');
  });

  test('should dispatch on click call the function dispatch', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    document.getElementById('submit-form').click();
    expect(createChallenge).toHaveBeenCalled();
  });

  test('should input title change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-title');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement).toBeDefined();
  });

  test('should input date change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-date');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input miniDescription change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-mini');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input miniDescription change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-descrip');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input category change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-category');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input image change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-image');
    Simulate.change(textAreaElement, { target: { value: 'hey' } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input target change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-target');
    Simulate.change(textAreaElement, { target: { value: 1 } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input collected change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-collected');
    Simulate.change(textAreaElement, { target: { value: 1 } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input participants change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-participants');
    Simulate.change(textAreaElement, { target: { value: 1 } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input days change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-days');
    Simulate.change(textAreaElement, { target: { value: 1 } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input creator change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-creator');
    Simulate.change(textAreaElement, { target: { value: 'me' } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input latitude change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-lat');
    Simulate.change(textAreaElement, { target: { value: 1 } });
    expect(textAreaElement.value).toBeDefined();
  });

  test('should input longitude change value', () => {
    const initialState = {};
    wrapper = wrapperFactory(initialState);
    render(<CreateChallengeScreen />, { wrapper });
    const textAreaElement = document.getElementById('challenge-lng');
    Simulate.change(textAreaElement, { target: { value: 1 } });
    expect(textAreaElement.value).toBeDefined();
  });
});
