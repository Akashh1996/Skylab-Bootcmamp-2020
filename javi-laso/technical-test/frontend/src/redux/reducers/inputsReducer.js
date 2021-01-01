import actionTypes from '../actions/action-types';

const initialState = [];
export default function inputsReducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case actionTypes.GET_INPUTS:
      newState = action.inputList;
      break;
    case actionTypes.DELETE_INPUT:
      newState = state.filter((inputItem) => {
        const { _id } = inputItem;
        return _id !== action.deletedItemId;
      });
      break;
    case actionTypes.ADD_INPUT:
      newState = [...state, action.addedItem];
      break;
    default:
      newState = state;
      break;
  }

  return newState;
}
