const axiosRecipes = require('axios');

function recipesController() {
  async function getRandomRecipe(req, res) {
    const randomRecipeUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    try {
      const { data } = await axiosRecipes.get(randomRecipeUrl);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  async function getRecipeByName(req, res) {
    let { params: { name } } = req;

    switch (name) {
      case 'Provençal Omelette Cake':
        name = 'Omelette Cake';
        return;
      case 'Gołąbki (cabbage roll)':
        name = 'cabbage roll';
        return;
      case 'Vegetable Shepherd’s Pie':
        name = 'Vegetable Shepherd';
        return;
      case 'Rosół (Polish Chicken Soup)':
        name = 'Polish Chicken Soup';
        return;
      case 'Polskie Naleśniki (Polish Pancakes)':
        name = 'Polish Pancakes';
        return;
      case 'Seafood fideuà':
        name = 'Seafood';
        return;
      case 'Sledz w Oleju (Polish Herrings)':
        name = 'Polish Herrings';
        return;
      case 'Boulangère Potatoes':
        name = 'Boulang';
        return;
    }

    const recipeUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    try {
      const { data } = await axiosRecipes.get(`${recipeUrl}${name}`);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  async function getRecipeCategories(req, res) {
    const recipeCategoriesUrl = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    try {
      const { data } = await axiosRecipes.get(recipeCategoriesUrl);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  async function getCategoryRecipes(req, res) {
    const { params: {name}} = req;
    const categoryRecipesUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=';
    try {
      const { data } = await axiosRecipes.get(`${categoryRecipesUrl}${name}`);
      res.send(data);
    } catch (error) {
      res.send(error);
    }
  }

  return {
    getRandomRecipe,
    getRecipeByName,
    getRecipeCategories,
    getCategoryRecipes
  };
}

module.exports = recipesController;
