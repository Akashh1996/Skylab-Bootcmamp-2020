import axios from 'axios';
import actionTypes from './action-types';

const url = 'http://localhost:2130/';

export function getInputsSuccess(inputList) {
  return {
    type: actionTypes.GET_INPUTS,
    inputList,
  };
}

export function getInputs() {
  return async (dispatch) => {
    const { data } = await axios.get(url);

    dispatch(getInputsSuccess(data));
  };
}

export function deleteInputSuccess(deletedItemId) {
  return {
    type: actionTypes.DELETE_INPUT,
    deletedItemId,
  };
}

export function deleteInput(inputObject) {
  return async (dispatch) => {
    const { data } = await axios.delete(url, { data: inputObject });
    const { _id } = data;

    dispatch(deleteInputSuccess(_id));
  };
}
