import axios from 'axios';
import actionTypes from './actionTypes';

function requestSabersSuccess(sabersList) {
  return {
    type: actionTypes.LOAD_SABERS,
    sabersList,
  };
}

function requestError(error) {
  return {
    type: actionTypes.LOAD_ERROR,
    error,
  };
}

export function requestSabers() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/sabers';
    try {
      const sabers = await axios.get(endpoint);
      dispatch(requestSabersSuccess(sabers.data));
    } catch (error) {
      dispatch(requestError(error));
    }
  };
}

function requestSaberByNameSuccess(saberItem) {
  return {
    type: actionTypes.LOAD_SABER,
    saberItem,
  }
}

export function requestSaberByName(saberName) {
  return async (dispatch) => {
    const endpoint = `http://localhost:1240/sabers/${saberName}`;
    try {
      const saber = await axios.get(endpoint);
      dispatch(requestSaberByNameSuccess(saber.data));
    } catch (error) {
      dispatch(requestError(error));
    }
  }
}
