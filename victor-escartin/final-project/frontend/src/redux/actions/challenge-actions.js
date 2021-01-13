import Axios from 'axios';
import actionTypes from './actionTypes';

const serverChallengesUrl = 'http://localhost:3000/challenges';

export const listChallenges = () => async (dispatch) => {
  dispatch({
    type: actionTypes.CHALLENGE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get('/challenges');
    dispatch({ type: actionTypes.CHALLENGE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.CHALLENGE_LIST_FAIL, payload: error.message });
  }
};

export const detailsChallenge = (challengeId) => async (dispatch) => {
  dispatch({ type: actionTypes.CHALLENGE_DETAILS_REQUEST, payload: challengeId });
  try {
    const { data } = await Axios.get(`/challenges/${challengeId}`);
    dispatch({ type: actionTypes.CHALLENGE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.CHALLENGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createChallenge = (newChallenge) => async (dispatch) => {
  dispatch({ type: actionTypes.CHALLENGE_CREATE_REQUEST });
  try {
    const { data } = await Axios.post(serverChallengesUrl, newChallenge);
    // eslint-disable-next-line no-debugger
    debugger;
    dispatch({
      type: actionTypes.CHALLENGE_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: actionTypes.CHALLENGE_CREATE_FAIL, payload: error.message });
  }
};

export const deleteChallenge = (challenge) => async (dispatch) => {
  dispatch({ type: actionTypes.CHALLENGE_DELETE_REQUEST });
  try {
    const { data: { _id } } = await Axios.delete(serverChallengesUrl, { data: challenge });
    dispatch({
      type: actionTypes.CHALLENGE_DELETE_SUCCESS,
      payload: _id,
    });
  } catch (error) {
    dispatch({ type: actionTypes.CHALLENGE_DELETE_FAIL, payload: error.message });
  }
};
