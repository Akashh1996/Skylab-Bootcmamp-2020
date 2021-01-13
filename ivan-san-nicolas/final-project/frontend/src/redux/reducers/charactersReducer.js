import actionTypes from '../actions/ActionTypes';

export default function charactersReducer(state = {}, action) {
  let newState = null;

  switch (action.type) {
    case actionTypes.LOAD_CHARACTER:
      newState = { ...state, characterItem: action.character };
      break;

    case actionTypes.LOAD_CHARACTERS:
      newState = { ...state, charactersArray: action.characters };
      break;

    case actionTypes.LOAD_CHARACTER_ID:
      newState = { ...state, characterId: action.characterId };
      break;

    case actionTypes.LOAD_ERROR:
      newState = { ...state, error: action.error };
      break;

    default:
      newState = { ...state };
      break;
  }

  return newState;
}
