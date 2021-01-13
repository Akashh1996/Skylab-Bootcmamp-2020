export {}
const { Router } = require('express');
const recipesController = require('../controllers/recipesController');

function recipesRouter() {
  const router = Router();
  const recipes = recipesController();

  router.route('/')
    .get(recipes.getRandomRecipe);

  router.route('/categories')
    .get(recipes.getRecipeCategories)
    
  router.route('/categories/:name')
    .get(recipes.getCategoryRecipes)

  router.route('/:name')
    .get(recipes.getRecipeByName)

  return router;
}

module.exports = recipesRouter;
