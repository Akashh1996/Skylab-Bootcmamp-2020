import actionTypes from '../actions/action-types';

const initialState = [];
export default function inputsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_INPUTS:
      return action.inputList;
    case actionTypes.DELETE_INPUT:
      return state.filter((inputItem) => {
        const { _id } = inputItem;
        return _id !== action.deletedItemId;
      });
    default:
      return state;
  }
}
