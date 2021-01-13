/* eslint-disable no-debugger */
/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import actionTypes from './actionTypes';

function requestSpotInfo(spot) {
  return {
    type: actionTypes.LOAD_SPOT, spot,
  };
}

function requestErrorSpot(error) {
  return {
    type: actionTypes.LOAD_SPOT_ERROR, error,
  };
}

export function requestSpot(spotId) {
  return async (dispatch) => {
    const endpoint = `http://localhost:3020/spot/${spotId}`;

    try {
      const spot = await axios.get(endpoint);
      dispatch(requestSpotInfo(spot.data));
    } catch (error) {
      dispatch(requestErrorSpot(error));
    }
  };
}
