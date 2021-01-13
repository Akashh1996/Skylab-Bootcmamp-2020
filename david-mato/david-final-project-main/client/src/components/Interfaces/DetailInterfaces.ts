interface Recipe {
    [key: string] : string
  }

interface Props {
    user: Object
    actions: Object
    route: { params: { recipe: Recipe } }
    navigation: { goBack(): void }
}

export default Props;
