const express = require('express');
const spotController = require('../controllers/spotController');

function spotRoutes(spot) {
  const spotRouter = express.Router();
  const spotItems = spotController(spot);
  spotRouter.route('/:spotId')
    .get(spotItems.getMethod);

  return spotRouter;
}

module.exports = spotRoutes;
