const express = require('express');

const inputController = require('../controllers/inputController');

function inputRouter(Input) {
  const router = express.Router();
  const input = inputController(Input);

  router.route('/:id')
    .delete(input.deleteMethod);
  router.route('/')
    .get(input.getMethod)
    .put(input.putMethod);

  return router;
}

module.exports = inputRouter;
