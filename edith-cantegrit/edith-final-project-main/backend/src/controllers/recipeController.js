function recipeController(Recipe) {
    function getMethod(req, res) {
      const query = {};
      const recipe = Recipe.find(query);
      recipe.populate({
        path: 'cooker'
      });
      recipe.exec((error, recipe) => {
        if (error) {
          res.send(error);
        }
        res.send(recipe);
      });
    }
    
    return { getMethod };
}
  
  module.exports = recipeController;