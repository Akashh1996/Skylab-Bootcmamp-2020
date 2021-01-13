import axios from 'axios';
import actionTypes from './ActionTypes';

// homeIp: 'http://192.168.1.129:1240'
// skylabIp: 'http://192.168.0.61:1240'
// MobileIp: 'http://192.168.43.40:1240'

function loadCharacterSuccess(character) {
  return {
    type: actionTypes.LOAD_CHARACTER,
    character,
  };
}

export function loadError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

export function loadCharacter(characterId) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/character';
    try {
      const { data } = await axios.get(endpoint, { params: { characterId } });
      dispatch(loadCharacterSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function loadCharacterByKey(characterUniqueKey, userId) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/character/getByKey';
    try {
      const { data } = await axios.get(endpoint, { params: { characterUniqueKey, userId } });
      dispatch(loadCharacterSuccess(data));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function setCharacterId(characterId) {
  return {
    type: actionTypes.LOAD_CHARACTER_ID,
    characterId,
  };
}

export function updateCharacter(characterId, updatedCharacter) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/character';
    try {
      await axios.patch(endpoint, { characterId, updatedCharacter });
      dispatch(loadCharacter(characterId));
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function deleteCharacter(characterId) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/character';
    try {
      await axios.delete(endpoint, { params: characterId });
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}

export function createCharacter(newCharacter) {
  return async (dispatch) => {
    const endpoint = 'http://192.168.1.129:1240/character';
    try {
      await axios.post(endpoint, { newCharacter });
    } catch (error) {
      dispatch(loadError(error));
    }
  };
}
