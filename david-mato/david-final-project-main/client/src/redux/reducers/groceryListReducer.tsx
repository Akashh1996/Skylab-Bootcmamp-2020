/* istanbul ignore file */
// @ts-nocheck

export default function groceryListReducer(state: Object[] = [], action
    : { type: string; product: Object, productName?: string }) {
  let productFound: Object | undefined;
  switch (action.type) {
    case 'GET_PRODUCT_TYPE':
      productFound = state.find((product) => product.product === action.product[0].product);
      return productFound
        ? [...state.map((product) => (product !== productFound
          ? product
          : { ...productFound, amount: productFound.amount + 1 }))]
        : [...state, action.product?.[0]];
    case 'DELETE_PRODUCT':
      return state.filter((productItem: Object) => productItem.product !== action.productName);
    case 'CROSS_OVER_PRODUCT':
      return state.map((product) => (product.product === action.product.name
        ? { ...product, isCrossed: action.product.crossedOver }
        : product));
    case 'DELETE_ALL_PRODUCTS':
      return [];
    default:
      return state;
  }
}
