interface Recipe {
    meals: object[]
}

export default function categoryRecipesByNameReducer(state: object[] | undefined = [], action
    : { type: string; recipe?: Recipe }) {
  switch (action.type) {
    case 'GET_CATEGORY_RECIPE_BY_NAME':
      return [...state, action.recipe?.meals[0]];
    case 'RESTORE_CATEGORY_RECIPE_BY_NAME_REDUCER':
      return [];
    default:
      return state;
  }
}
