export default function recipeCategoriesReducer(state = {}, action
  : { type: string; categories: object; }) {
  switch (action.type) {
    case 'GET_RECIPE_CATEGORIES':
      return action.categories;
    default:
      return state;
  }
}
