interface Navigation {
    navigate(route: string, data: object): void
}

interface Actions {
    getRecipeByNameFromAPI(text : string, boolean: boolean): void
  }

interface Props {
    recipes: Object
    categoryRecipes: Object
    actions: Actions
    navigation: Navigation
    route: { params: { categoryName: string } }
}

export default Props;
