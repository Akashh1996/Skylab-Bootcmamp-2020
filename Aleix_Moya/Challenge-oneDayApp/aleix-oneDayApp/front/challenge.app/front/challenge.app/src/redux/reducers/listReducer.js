import actionTypes from '../actions/actionTypes';

export default function listReducer(state = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_LIST:
      return { ...state, productList: action.productList };
    case actionTypes.LOAD_LIST_ERROR:
      return { ...state, error: action.error };
    case actionTypes.SHOW_FAVLIST:
      return { ...state, showFav: action.carritoList };
    case actionTypes.ADD_TO_CARRITO:
      return { ...state, carritoList: action.updatedCarritoList };
    case actionTypes.DELETE_FROM_CARRITO:
      return { ...state, carritoList: action.updatedCarritoList };
    case actionTypes.LOAD_DATASHEET:
      return { ...state, datasheet: action.datasheet };
    case actionTypes.LOAD_DATASHEET_ERROR:
      return { ...state, errorDatasheet: action.error };
    default:
      return state;
  }
}
