/* eslint-disable prefer-promise-reject-errors */
import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './actions';
import actionTypes from './action-types';

jest.mock('axios');

const url = 'http://localhost:2130/';
const mockStore = configureStore([thunk]);

describe('actions', () => {
  let fakeObject;
  let fakeData;
  let action;
  let fakeInput;
  let store;
  beforeEach(() => {
    store = mockStore();
  });

  afterEach(() => {
    store = null;
  });

  describe('getInputsSuccess', () => {
    beforeEach(() => {
      action = actions.getInputsSuccess();
    });

    test('action.type should be GET_INPUTS', () => {
      expect(action.type).toBe(actionTypes.GET_INPUTS);
    });
  });

  describe('getInputsError', () => {
    beforeEach(() => {
      action = actions.getInputsError();
    });

    test('action.type should be GET_INPUTS_ERROR', () => {
      expect(action.type).toBe(actionTypes.GET_INPUTS_ERROR);
    });
  });

  describe('getInputs', () => {
    beforeEach(() => {
      fakeObject = { data: fakeData };
    });

    test('should call axios.get', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(fakeObject));
      await store.dispatch(actions.getInputs());
      expect(axios.get).toHaveBeenCalledWith(url);
    });

    test('the store should have GET_INPUTS action', async () => {
      axios.get.mockImplementationOnce(() => Promise.resolve(fakeObject));
      await store.dispatch(actions.getInputs());
      expect(store.getActions()).toEqual([{
        type: actionTypes.GET_INPUTS,
        inputList: fakeData,
      }]);
    });

    test('the store should have GET_INPUTS_ERROR action', async () => {
      axios.get.mockImplementationOnce(() => Promise.reject('error'));
      await store.dispatch(actions.getInputs());
      expect(store.getActions()).toEqual([{
        type: actionTypes.GET_INPUTS_ERROR,
        error: 'error',
      }]);
    });
  });

  describe('deleteInputSuccess', () => {
    beforeEach(() => {
      action = actions.deleteInputSuccess();
    });

    test('action.type should be DELETE_INPUT', () => {
      expect(action.type).toBe(actionTypes.DELETE_INPUT);
    });
  });

  describe('deleteInputError', () => {
    beforeEach(() => {
      action = actions.deleteInputError();
    });

    test('action.type should be DELETE_INPUT_ERROR', () => {
      expect(action.type).toBe(actionTypes.DELETE_INPUT_ERROR);
    });
  });

  describe('deleteInput', () => {
    beforeEach(() => {
      fakeInput = { };
      fakeData = { data: { _id: null } };
    });

    test('should call axios.get', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.deleteInput(fakeInput));
      expect(axios.delete).toHaveBeenCalledWith(url, { data: fakeInput });
    });

    test('the store should have DELETE_INPUT action', async () => {
      axios.delete.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.deleteInput(fakeInput));
      expect(store.getActions()).toEqual([{
        type: actionTypes.DELETE_INPUT,
        deletedItemId: null,
      }]);
    });

    test('the store should have DELETE_INPUT_ERROR action', async () => {
      axios.delete.mockImplementationOnce(() => Promise.reject('error'));
      await store.dispatch(actions.deleteInput(fakeInput));
      expect(store.getActions()).toEqual([{
        type: actionTypes.DELETE_INPUT_ERROR,
        error: 'error',
      }]);
    });
  });

  describe('addInputSuccess', () => {
    beforeEach(() => {
      action = actions.addInputSuccess();
    });

    test('action.type should be ADD_INPUT', () => {
      expect(action.type).toBe(actionTypes.ADD_INPUT);
    });
  });

  describe('addInputError', () => {
    beforeEach(() => {
      action = actions.addInputError();
    });

    test('action.type should be ADD_INPUT_ERROR', () => {
      expect(action.type).toBe(actionTypes.ADD_INPUT_ERROR);
    });
  });

  describe('addInput', () => {
    beforeEach(() => {
      fakeInput = { };
      fakeData = { data: 'fakeDataAdded' };
    });

    test('should call axios.post', async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.addInput(fakeInput));
      expect(axios.post).toHaveBeenCalledWith(url, fakeInput);
    });

    test('the store should have ADD_INPUT action', async () => {
      axios.post.mockImplementationOnce(() => Promise.resolve(fakeData));
      await store.dispatch(actions.addInput(fakeInput));
      expect(store.getActions()).toEqual([{
        type: actionTypes.ADD_INPUT,
        addedItem: 'fakeDataAdded',
      }]);
    });

    test('the store should have ADD_INPUT_ERROR action', async () => {
      axios.post.mockImplementationOnce(() => Promise.reject('error'));
      await store.dispatch(actions.addInput(fakeInput));
      expect(store.getActions()).toEqual([{
        type: actionTypes.ADD_INPUT_ERROR,
        error: 'error',
      }]);
    });
  });
});
