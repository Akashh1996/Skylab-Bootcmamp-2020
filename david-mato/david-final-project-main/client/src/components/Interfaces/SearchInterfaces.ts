interface Category {
    strCategory: string
    strCategoryThumb: string
  }

  interface Categories {
    categories: Category[]
  }

  interface Navigation {
    navigate(route: string, data: object): void
  }

  interface Actions {
    restoreSearchReducer(): void
    getCategoryRecipesFromAPI(text: string): void
    restoreCategoryRecipeByNameReducer(): void
    restoreCategoryRecipesReducer(): void
  }

  interface Props {
    categories: Categories
    actions: Actions
    navigation: Navigation
  }

export default Props;
