import actionTypes from '../actions/ActionTypes';
import charactersReducer from './charactersReducer';

describe('charactersReducer', () => {
  let state = {};

  afterEach(() => {
    state = {};
  });

  test('should return an object with characterItem property', () => {
    const action = {
      type: actionTypes.LOAD_CHARACTER,
      character: 'characterItem',
    };

    const newState = charactersReducer(state, action);
    const expectedtState = {
      characterItem: 'characterItem',
    };

    expect(newState).toEqual(expectedtState);
  });

  test('should return an object with charactersArray property', () => {
    const action = {
      type: actionTypes.LOAD_CHARACTERS,
      characters: 'array',
    };

    const newState = charactersReducer(state, action);
    const expectedtState = {
      charactersArray: 'array',
    };

    expect(newState).toEqual(expectedtState);
  });

  test('should return an object with characterId property', () => {
    const action = {
      type: actionTypes.LOAD_CHARACTER_ID,
      characterId: 'characterId',
    };

    const newState = charactersReducer(state, action);
    const expectedtState = {
      characterId: 'characterId',
    };

    expect(newState).toEqual(expectedtState);
  });

  test('should return an object like initial state', () => {
    const action = {
      type: 'none',
    };

    const newState = charactersReducer(state, action);
    const expectedtState = {};

    expect(newState).toEqual(expectedtState);
  });

  test('should return an object with an error property', () => {
    const action = {
      type: 'LOAD_ERROR',
    };

    const newState = charactersReducer(state, action);
    const expectedtState = {};

    expect(newState).toEqual(expectedtState);
  });

  test("state should be an empty object if there's no state argument", () => {
    const newState = charactersReducer(undefined, {});

    expect(newState).toEqual({});
  });
});
