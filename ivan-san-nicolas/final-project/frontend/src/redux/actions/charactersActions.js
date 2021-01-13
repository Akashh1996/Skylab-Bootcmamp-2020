import axios from 'axios';
import actionTypes from './ActionTypes';

function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

export function loadCharactersSuccess(characters) {
  return {
    type: actionTypes.LOAD_CHARACTERS,
    characters,
  };
}

export function loadCharactersByOwner(ownerId) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/characters';
    try {
      const { data } = await axios.get(endpoint, { params: { ownerId } });
      dispatch(loadCharactersSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
