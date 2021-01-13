const { Router } = require('express');
const recipeController = require('../controllers/recipeController');

function recipeRouter(Recipe) {
  const router = Router();
  const recipe = recipeController(Recipe);

  router.route('/')
    .get(recipe.getMethod)

  return router;
}

module.exports = recipeRouter;