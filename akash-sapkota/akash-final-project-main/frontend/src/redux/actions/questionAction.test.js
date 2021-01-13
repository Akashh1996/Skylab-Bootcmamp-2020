import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import * as actions from './questionAction';
import actionTypes from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('question-actions', () => {
    let mockData;
    let mockError;
    let store;
    beforeEach(() => {
      store = mockStore();
      mockData = { data: 'question' };
      mockError = 'error';
    });
    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    describe(('load question'), () => {
      test('should dispatch the correct action with success', async () => {
        axios.get = jest.fn().mockResolvedValueOnce(mockData);
        const questionList = 'question';
        const expectedAction = [{
          type: actionTypes.LOAD_QUESTION,
          questionList,
        }];

        await store.dispatch(actions.loadQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });
      test('shoudl dispatch the action with error', async () => {
        axios.get = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.LOAD_QUESTION_ERROR,
          error,
        }];

        await store.dispatch(actions.loadQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    describe('RESET', () => {
      test('should return correct action', () => {
        const expectedAction = {
          type: actionTypes.RESET,
        };
        expect(actions.reset()).toEqual(expectedAction);
      });
    });
    describe('FILTER_BY_NO_ANSWER', () => {
      test('should return correct action', () => {
        const expectedAction = {
          type: actionTypes.FILTER_BY_NO_ANSWER,
        };
        expect(actions.filterByNoAnswer()).toEqual(expectedAction);
      });
    });
    describe('Post question', () => {
      test('should dispatch the correct action with success', async () => {
        const mockPostData = { data: 'newQuestion' };
        axios.post = jest.fn().mockResolvedValueOnce(mockPostData);
        const newQuestion = 'newQuestion';
        const expectedAction = [{
          type: actionTypes.POST_QUESTION,
          newQuestion,
        }];

        await store.dispatch(actions.postQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });
      test('should dispatch the correct action when error', async () => {
        axios.post = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.POST_QUESTION_ERROR,
          error,
        }];

        await store.dispatch(actions.postQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    describe(('load question detail'), () => {
      test('should dispatch the correct action with success', async () => {
        const mockDetailData = { data: 'questionDetail' };
        axios.get = jest.fn().mockResolvedValueOnce(mockDetailData);
        const questionDetail = 'questionDetail';
        const expectedAction = [{
          type: actionTypes.LOAD_QUESTION_DETAIL,
          questionDetail,
        }];

        await store.dispatch(actions.loadQuestionDetail());

        expect(store.getActions()).toEqual(expectedAction);
      });
      test('should dispatch the correct action with load question detail error', async () => {
        axios.get = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.LOAD_QUESTION_DETAIL_ERROR,
          error,
        }];

        await store.dispatch(actions.loadQuestionDetail());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe(('Update question'), () => {
      test('should dispatch the correct action with success', async () => {
        const mockUpdate = { data: 'updatedQuestion' };
        axios.put = jest.fn().mockResolvedValueOnce(mockUpdate);
        const updatedQuestion = 'updatedQuestion';
        const expectedAction = [{
          type: actionTypes.UPDATE_QUESTION,
          updatedQuestion,
        }];

        await store.dispatch(actions.updateQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });

      test('should dispatch the correct action with error', async () => {
        axios.put = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.UPDATE_QUESTION_ERROR,
          error,
        }];

        await store.dispatch(actions.updateQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe(('Delete Question'), () => {
      test('should dispatch the correct action with success', async () => {
        mockData = { data: 'deletedQuestion' };

        axios.delete = jest.fn().mockResolvedValueOnce(mockData);
        const deletedQuestion = 'deletedQuestion';
        const expectedAction = [{
          type: actionTypes.DELETE_QUESTION,
          deletedQuestion,
        }];

        await store.dispatch(actions.deleteQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });

      test('should dispatch the correct action with success', async () => {
        axios.delete = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.DELETE_QUESTION_ERROR,
          error,
        }];

        await store.dispatch(actions.deleteQuestion());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
