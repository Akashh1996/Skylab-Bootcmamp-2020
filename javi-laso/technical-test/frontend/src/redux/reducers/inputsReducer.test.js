import actionTypes from '../actions/action-types';
import inputsReducer from './inputsReducer';

describe('inputsReducer', () => {
  test('should return the initial state', () => {
    expect(inputsReducer(undefined, {})).toEqual([]);
  });

  test('should return "fakeList"', () => {
    const action = {
      type: actionTypes.GET_INPUTS,
      inputList: 'fakeList',
    };
    expect(inputsReducer(null, action)).toBe('fakeList');
  });

  test('should return "fakeList"', () => {
    const action = {
      type: actionTypes.DELETE_INPUT,
      deletedItemId: 3,
    };
    expect(inputsReducer([{ _id: 2 }, { _id: 3 }], action)).toEqual([{ _id: 2 }]);
  });

  test('should return the list with object added', () => {
    const action = {
      type: actionTypes.ADD_INPUT,
      addedItem: { _id: 3 },
    };
    expect(inputsReducer([{ _id: 2 }], action)).toEqual([{ _id: 2 }, { _id: 3 }]);
  });
});
