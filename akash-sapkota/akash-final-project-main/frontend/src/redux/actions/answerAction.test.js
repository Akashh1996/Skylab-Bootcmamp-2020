import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import postAnswer, { deleteAnswer } from './answerAction';

import actionTypes from './actionTypes';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('Post-Answer', () => {
    let mockData;
    let mockError;
    let store;
    beforeEach(() => {
      store = mockStore();
      mockData = { data: 'newAnswer' };
      mockError = 'error';
    });
    afterEach(() => {
      jest.resetAllMocks();
      store = null;
    });

    describe(('Post Answer'), () => {
      test('should dispatch the correct action with success', async () => {
        axios.post = jest.fn().mockResolvedValueOnce(mockData);
        const newAnswer = 'newAnswer';
        const expectedAction = [{
          type: actionTypes.POST_ANSWER,
          newAnswer,
        }];

        await store.dispatch(postAnswer());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });
    describe(('Post Answer error'), () => {
      test('should dispatch the correct action with error', async () => {
        axios.post = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.POST_ANSWER_ERROR,
          error,
        }];

        await store.dispatch(postAnswer());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe(('Delete Answer'), () => {
      test('should dispatch the correct action with success', async () => {
        mockData = { data: 'deletedAnswer' };

        axios.delete = jest.fn().mockResolvedValueOnce(mockData);
        const deletedAnswer = 'deletedAnswer';
        const expectedAction = [{
          type: actionTypes.DELETE_ANSWER,
          deletedAnswer,
        }];

        await store.dispatch(deleteAnswer());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });

    describe(('Delete Answer Error'), () => {
      test('should dispatch the correct action with success', async () => {
        mockData = { data: 'deletedAnswer' };

        axios.delete = jest.fn().mockRejectedValueOnce(mockError);
        const error = 'error';
        const expectedAction = [{
          type: actionTypes.DELETE_ANSWER_ERROR,
          error,
        }];

        await store.dispatch(deleteAnswer());

        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
