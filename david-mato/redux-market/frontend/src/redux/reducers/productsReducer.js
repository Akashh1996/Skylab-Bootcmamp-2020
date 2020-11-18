export default function productsReducer(state = [], action) {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return [...state, ...action.products];
    default:
      return state;
  }
}
