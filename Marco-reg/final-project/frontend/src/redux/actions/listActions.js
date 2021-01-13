/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

function requesListSpotSuccess(list) {
  return {
    type: actionTypes.LOAD_SPOTS, list,
  };
}

function requestListSpotError(error) {
  return {
    type: actionTypes.LOAD_SPOTS_ERROR, error,

  };
}
export function randomSpots(list) {
  return {
    type: actionTypes.RANDOM_SPOTS, list,
  };
}

export function requestListSpots() {
  return async (dispatch) => {
    const endpoint = 'http://localhost:3020/spots';
    try {
      const spots = await axios.get(endpoint);

      dispatch(requesListSpotSuccess(spots.data));
    } catch (error) {
      dispatch(requestListSpotError(error));
    }
  };
}
