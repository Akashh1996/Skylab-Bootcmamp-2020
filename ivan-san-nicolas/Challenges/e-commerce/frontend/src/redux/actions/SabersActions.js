import axios from 'axios';
import actionTypes from './actionTypes';

function requestSabersSuccess(sabersList) {
  return {
    type: actionTypes.LOAD_SABERS,
    sabersList,
  };
}

function requestSabersError(error) {
  return {
    type: actionTypes.LOAD_SABERS_ERROR,
    error,
  };
}

export default function requesSabers() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:1240/sabers';
    try {
      const sabers = await axios.get(endpoint);
      dispatch(requestSabersSuccess(sabers.data));
    } catch (error) {
      dispatch(requestSabersError(error));
    }
  };
}
