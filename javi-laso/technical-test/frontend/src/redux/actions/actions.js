import axios from 'axios';
import actionTypes from './action-types';

const url = 'http://localhost:2130/';

export function getInputsSuccess(inputList) {
  return {
    type: actionTypes.GET_INPUTS,
    inputList,
  };
}

export function getInputsError(error) {
  return {
    type: actionTypes.GET_INPUTS_ERROR,
    error,
  };
}

export function getInputs() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(url);

      dispatch(getInputsSuccess(data));
    } catch (error) {
      dispatch(getInputsError(error));
    }
  };
}

export function deleteInputSuccess(deletedItemId) {
  return {
    type: actionTypes.DELETE_INPUT,
    deletedItemId,
  };
}

export function deleteInputError(error) {
  return {
    type: actionTypes.DELETE_INPUT_ERROR,
    error,
  };
}

export function deleteInput(inputObject) {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(url, { data: inputObject });
      const { _id } = data;

      dispatch(deleteInputSuccess(_id));
    } catch (error) {
      dispatch(deleteInputError(error));
    }
  };
}

export function addInputSuccess(addedItem) {
  return {
    type: actionTypes.ADD_INPUT,
    addedItem,
  };
}

export function addInputError(error) {
  return {
    type: actionTypes.ADD_INPUT_ERROR,
    error,
  };
}

export function addInput(inputObject) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(url, inputObject);

      dispatch(addInputSuccess(data));
    } catch (error) {
      dispatch(addInputError(error));
    }
  };
}
