const express = require('express');
const sabersController = require('../controllers/sabersController');
const saberController = require('../controllers/saberController');

function sabersRouter(Sabers) {
  const router = express.Router();
  const sabers = sabersController(Sabers);
  const saber = saberController(Sabers);

  router.route('/')
    .get(sabers.getMethod);

  router.route('/:saberName')
  .get(saber.getMethod);

  return router;
}

module.exports = sabersRouter;
