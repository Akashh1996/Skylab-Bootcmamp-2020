import actionTypes from '../actions/action-types';

const initialState = {};
let productTypes;

export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ITEMS_LIST:
      productTypes = [...new Set(action.itemList.map((item) => item['product-type']))];
      return {
        ...state,
        itemList: action.itemList,
        productTypes,
      };
    case actionTypes.LOAD_ITEM:
      return { ...state, item: action.item };
    case actionTypes.FILTER_ITEMS:
      return {
        ...state,
        filteredList: state.itemList.filter((item) => {
          if (action.productType) {
            return item['product-type'] === action.productType;
          }
          return true;
        }),
      };
    default:
      return state;
  }
}
