interface Recipe {
    strMealThumb: string
    strMeal: string
}

interface Navigation {
    navigate(route: string, data: object): void
}

interface Props {
    recipes: Array<Recipe>
    actions: Object
    navigation: Navigation
}

export default Props;
