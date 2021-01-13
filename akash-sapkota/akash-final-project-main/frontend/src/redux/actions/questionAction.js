import axios from 'axios';
import actionTypes from './actionTypes';

const endpoint = 'https://code-flow.herokuapp.com/questions';

function loadQuestionSuccess(questionList) {
  return {
    type: actionTypes.LOAD_QUESTION,
    questionList,
  };
}
function loadQuestionError(error) {
  return {
    type: actionTypes.LOAD_QUESTION_ERROR,
    error,
  };
}

export function loadQuestion(tag) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(endpoint, { params: { tag } });
      dispatch(loadQuestionSuccess(data));
    } catch (error) {
      dispatch(loadQuestionError(error));
    }
  };
}
export function filterByNoAnswer() {
  return {
    type: actionTypes.FILTER_BY_NO_ANSWER,
  };
}
export function reset() {
  return {
    type: actionTypes.RESET,
  };
}

function postQuestionSuccess(newQuestion) {
  return {
    type: actionTypes.POST_QUESTION,
    newQuestion,
  };
}

function postQuestionError(error) {
  return {
    type: actionTypes.POST_QUESTION_ERROR,
    error,
  };
}

export function postQuestion(question) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, question);
      dispatch(postQuestionSuccess(data));
    } catch (error) {
      dispatch(postQuestionError(error));
    }
  };
}

function loadQuestionDetailSuccess(questionDetail) {
  return {
    type: actionTypes.LOAD_QUESTION_DETAIL,
    questionDetail,
  };
}
function loadQuestionDetailError(error) {
  return {
    type: actionTypes.LOAD_QUESTION_DETAIL_ERROR,
    error,
  };
}

export function loadQuestionDetail(questionId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`https://code-flow.herokuapp.com/question/${questionId}`);
      dispatch(loadQuestionDetailSuccess(data));
    } catch (error) {
      dispatch(loadQuestionDetailError(error));
    }
  };
}
function deleteQuestionSuccess(deletedQuestion) {
  return {
    type: actionTypes.DELETE_QUESTION,
    deletedQuestion,
  };
}

function deleteQuestionError(error) {
  return {
    type: actionTypes.DELETE_QUESTION_ERROR,
    error,
  };
}

export function deleteQuestion(questionId) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint, {
        params: {
          _id: questionId,
        },
      });
      dispatch(deleteQuestionSuccess(data));
    } catch (error) {
      dispatch(deleteQuestionError(error));
    }
  };
}
function updateQuestionSuccess(updatedQuestion) {
  return {
    type: actionTypes.UPDATE_QUESTION,
    updatedQuestion,
  };
}

function updateQuestionError(error) {
  return {
    type: actionTypes.UPDATE_QUESTION_ERROR,
    error,
  };
}

export function updateQuestion(questionToUpdate, id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`https://code-flow.herokuapp.com/question/${id}`,
        questionToUpdate);
      dispatch(updateQuestionSuccess(data));
    } catch (error) {
      dispatch(updateQuestionError(error));
    }
  };
}
