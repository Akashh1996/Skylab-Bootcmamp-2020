interface Actions {
    getRecipeByNameFromAPI(text : string, boolean: boolean) : void
    restoreSearchReducer() : void
}

interface Navigation {
    navigate(route: string, data: object): void
  }

interface Props {
    searchBoxRef(): void
    actions: Actions
    navigation: Navigation
    recipe: object
    noResults: boolean
}

export default Props;
