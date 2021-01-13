function userController(User) {
    function getMethod(req, res) {
        const {query: { product } } = req;
        function findCallback(error, user) {
          return error ? res.send(error) : res.json(user);
        }
    
        User.find({product}, findCallback);
    }

    function postMethod(req, res) {
        const { body: { query } } = req;
        function findCallback(error, userSaved) {
        return error ? res.send(error) : res.json(userSaved);
        }

        User.create(query, findCallback);
    }

    function putFavoriteRecipe(req, res) {
        const {body} = req;
        const update = {...body.user, favoriteRecipes: [...body.user.favoriteRecipes, body.recipe ]};
        function callback(error, updatedUser) {
            return error ? res.send(error) : res.send(updatedUser);
        }

        User.findOneAndUpdate(
            body.user, update, { new: true }, callback,
        );
    }

    function deleteFavoriteRecipe(req, res) {
        const {body} = req;
        const update = {...body.user, favoriteRecipes: body.user.favoriteRecipes.filter((favoriteRecipe) => favoriteRecipe.strMeal !== body.recipe.strMeal)};
        function callback(error, updatedUser) {
            return error ? res.send(error) : res.send(updatedUser);
        }

        User.findOneAndUpdate(
            body.user, update, { new: true }, callback,
        );
    }

    function putListItem(req, res) {
        const {body} = req;
        const update = {...body.user, groceryList: body.groceryList};

        function callback(error, updatedUser) {
            return error ? res.send(error) : res.send(updatedUser);
        }

        User.findOneAndUpdate(
            body.user.id, update, { new: true }, callback,
        );
    }

    function putMenu(req, res) {
        const {body} = req;
        function callback(error, updatedMenu) {
            return error ? res.send(error) : res.send(updatedMenu);
        }

        User.findOneAndUpdate(
            body.user.id, body.user, { new: true }, callback,
        );
    }

    function putOwnRecipe(req, res) {
        const {body} = req;
        function callback(error, updatedUser) {
            return error ? res.send(error) : res.send(updatedUser);
        }

        User.findOneAndUpdate(
            body.user.id, body.user, { new: true }, callback,
        );
    }

  return {
    getMethod,
    postMethod,
    putFavoriteRecipe,
    deleteFavoriteRecipe,
    putListItem,
    putMenu,
    putOwnRecipe
  };
}

module.exports = userController;