const { Router } = require('express');
const charactersController = require('../controllers/charactersController');

function charactersRouter(Character) {
  const router = Router();
  const characters = charactersController(Character);

  router.route('/')
    .get(characters.getMethod);

  return router;
}

module.exports = charactersRouter;
