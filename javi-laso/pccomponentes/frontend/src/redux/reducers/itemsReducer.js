import actionTypes from '../actions/action-types';

export default function itemsReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS_LIST:
      return { ...state, itemList: action.itemList };
    case actionTypes.LOAD_ITEM:
      return { ...state, item: action.item };

    default:
      return state;
  }
}
