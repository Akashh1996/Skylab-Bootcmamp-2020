import actionTypes from '../actions/action-types';

const initialState = { cartList: [], cartSize: 0 };
let id;
const newCartObject = {};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_SHOPPING_CART:
      action.cartList.forEach((cartItem) => {
        if (newCartObject[cartItem.id]) {
          newCartObject[cartItem.id] = [...newCartObject[cartItem.id], cartItem];
        } else {
          newCartObject[cartItem.id] = [cartItem];
        }
      });
      return {
        ...state,
        cartList: newCartObject,
        cartSize: Object.values(newCartObject).reduce((acc, cur) => acc + cur.length, 0),
      };
    case actionTypes.PUT_ITEM_IN_CART:
      id = action.cartItem.id;
      if (state.cartList[`${id}`]) {
        state.cartList[`${id}`] = [...state.cartList[`${id}`], action.cartItem];
      }
      debugger;
      return {
        ...state,
        cartList: { ...state.cartList, [`${id}`]: [...state.cartList[`${id}`], action.cartItem] },
        cartSize: state.cartSize + 1,
      };
    case actionTypes.DELETE_ITEM_FROM_CART:
      id = action.cartItem.id;
      return {
        ...state,
        cartList: { ...state.cartList, [`${id}`]: state.cartList[`${id}`].slice(0, state.cartList[`${id}`].length - 1) },
        cartSize: state.cartSize > 0 ? state.cartSize - 1 : 0,
      };

    default:
      return state;
  }
}
