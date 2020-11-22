/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
/* eslint-disable no-underscore-dangle */
import Axios from 'axios';
import {
  PROJECT_CREATE_FAIL,
  PROJECT_CREATE_REQUEST,
  PROJECT_CREATE_SUCCESS,
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_LIST_FAIL,
  PROJECT_LIST_REQUEST,
  PROJECT_LIST_SUCCESS,
  PROJECT_UPDATE_REQUEST,
  PROJECT_UPDATE_SUCCESS,
  PROJECT_UPDATE_FAIL,
  PROJECT_DELETE_REQUEST,
  PROJECT_DELETE_FAIL,
  PROJECT_DELETE_SUCCESS,
} from '../constants/projectConstants';

export const listProjects = () => async (dispatch) => {
  dispatch({
    type: PROJECT_LIST_REQUEST,
  });
  try {
    debugger
    const { data } = await Axios.get('http://localhost:8000/projects');
    dispatch({ type: PROJECT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PROJECT_LIST_FAIL, payload: error.message });
  }
};

export const detailsProject = (projectId) => async (dispatch) => {
  dispatch({ type: PROJECT_DETAILS_REQUEST, payload: {projectId} });
  try {
    debugger
    const { data } = await Axios.get(`http://localhost:8000/projects/detail`, {projectId});
    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createProject = () => async (dispatch, getState) => {
  dispatch({ type: PROJECT_CREATE_REQUEST });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.post(
      '/projects',
      {},
      {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      },
    );
    dispatch({
      type: PROJECT_CREATE_SUCCESS,
      payload: data.project,
    });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: PROJECT_CREATE_FAIL, payload: message });
  }
};

export const updateProject = (project) => async (dispatch, getState) => {
  dispatch({ type: PROJECT_UPDATE_REQUEST, payload: project });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = await Axios.put(`/projects/${project._id}`, project, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PROJECT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: PROJECT_UPDATE_FAIL, error: message });
  }
};

export const deleteProject = (projectId) => async (dispatch, getState) => {
  dispatch({ type: PROJECT_DELETE_REQUEST, payload: projectId });
  const {
    userSignin: { userInfo },
  } = getState();
  try {
    const { data } = Axios.delete(`/projects/${projectId}`, {
      headers: { Authorization: `Bearer ${userInfo.token}` },
    });
    dispatch({ type: PROJECT_DELETE_SUCCESS });
  } catch (error) {
    const message = error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
    dispatch({ type: PROJECT_DELETE_FAIL, payload: message });
  }
};
