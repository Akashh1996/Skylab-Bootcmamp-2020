// @ts-nocheck
export default function recipesReducer(state = [], action: { type: string; recipe: Object; }) {
  switch (action.type) {
    case 'GET_RECIPE':
      return [...state, action.recipe.meals[0]];
    default:
      return state;
  }
}
