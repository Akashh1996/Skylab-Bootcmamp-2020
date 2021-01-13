/* eslint-disable react/prop-types */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AnswerForm from './AnswerForm';
import postAnswer from '../../../redux/actions/answerAction';

jest.mock('../../../redux/actions/answerAction');

const buildStore = configureStore([thunk]);

describe('answer from', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    const dispatch = jest.fn();
    const initialState = {
      questionReducer: { questionDetail: { _id: 'questionId' } },
      userReducer: {
        user: null,
      },
      dispatch,
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
    render(<AnswerForm />, { wrapper: Wrapper });
  });

  test('should render Add your answer text', () => {
    const userAnswer = document.querySelector('.user-answer');

    expect(userAnswer.innerHTML).toBe('Post Your Answer');
  });

  test('should call the onChange function', () => {
    const event = {
      target: {
        value: 'html',
      },
    };
    const inputsElements = document.querySelectorAll('.data-test');

    inputsElements.forEach((inputs) => {
      fireEvent.change(inputs, event);
      expect(inputs.value).toBe('html');
    });
  });

  test('should call dispatch on submit when input has some value', () => {
    const buttonElement = document.querySelector('.button-submit');

    const event = {
      target: {
        value: 'html',
      },
    };
    const inputsElements = document.querySelectorAll('.data-test');

    inputsElements.forEach((inputs) => {
      fireEvent.change(inputs, event);
      expect(inputs.value).toBe('html');
    });

    fireEvent.click(buttonElement);

    expect(postAnswer).toHaveBeenCalled();
  });

  test('should call dispatch on submit when there is no value', () => {
    const buttonElement = document.querySelector('.button-submit');
    const event = {
      target: {
        value: '',
      },
    };
    const inputsElements = document.querySelectorAll('.data-test');

    inputsElements.forEach((inputs) => {
      fireEvent.change(inputs, event);
      expect(inputs.value).toBe('');
    });

    fireEvent.click(buttonElement);

    expect(postAnswer).not.toHaveBeenCalled();
  });
});
