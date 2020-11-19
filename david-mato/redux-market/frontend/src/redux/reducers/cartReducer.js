export default function cartReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      debugger;
      return [...state, action.product];
    default:
      return state;
  }
}
