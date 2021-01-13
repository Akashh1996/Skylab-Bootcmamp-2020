export default function categoryRecipesReducer(state = {}, action:
  { type: string; categoryRecipes?: object }) {
  switch (action.type) {
    case 'GET_CATEGORY_RECIPES':
      return action.categoryRecipes;
    case 'RESTORE_CATEGORY_RECIPES_REDUCER':
      return {};
    default:
      return state;
  }
}
