import axios from 'axios';
import actionTypes from './actionTypes';

const endpoint = 'https://code-flow.herokuapp.com/answers';

function postAnswerSuccess(newAnswer) {
  return {
    type: actionTypes.POST_ANSWER,
    newAnswer,
  };
}
function postAnswerError(error) {
  return {
    type: actionTypes.POST_ANSWER_ERROR,
    error,
  };
}

export default function postAnswer(newAnswer) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, newAnswer);
      dispatch(postAnswerSuccess(data));
    } catch (error) {
      dispatch(postAnswerError(error));
    }
  };
}

function deleteAnswerSuccess(deletedAnswer) {
  return {
    type: actionTypes.DELETE_ANSWER,
    deletedAnswer,
  };
}

function deleteAnswerError(error) {
  return {
    type: actionTypes.DELETE_ANSWER_ERROR,
    error,
  };
}

export function deleteAnswer(answerId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint, {
        params: {
          _id: answerId,
        },
      });
      dispatch(deleteAnswerSuccess(data));
    } catch (error) {
      dispatch(deleteAnswerError(error));
    }
  };
}
