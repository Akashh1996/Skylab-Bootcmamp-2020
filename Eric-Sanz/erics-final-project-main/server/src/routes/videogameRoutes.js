const { Router } = require('express');
const videogamesController = require('../controllers/videogameControllers/videogamesController');
const videogameController = require('../controllers/videogameControllers/videogameController');
const searchVideogamesController = require('../controllers/searchVideogamesController/searchVideogamesController');

function videogameRoute(Videogame) {
  const videogameRouter = Router();
  const videogames = videogamesController(Videogame);
  const videogame = videogameController(Videogame);
  const searchVideogames = searchVideogamesController(Videogame);

  videogameRouter.route('/products')
    .get(videogames.getMethod)
    .put(videogames.putMethod);

  videogameRouter.route('/product/:id')
    .get(videogame.getMethod);

  videogameRouter.route('/products/search/:term')
    .get(searchVideogames.getMethod);

  return videogameRouter;
}

module.exports = videogameRoute;
