interface Actions {
    updateGroceryListInDB(user: Object, groceryList: Object): void
    deleteProductFromGorceryList(foodGroupItem: string): void
    deleteAllProductsFromGorceryList(): void
    crossOverProductFromGorceryList(object: Object): void
}

interface Props {
  groceryList: Object
  user: Object
  actions: Actions
}

export default Props;
