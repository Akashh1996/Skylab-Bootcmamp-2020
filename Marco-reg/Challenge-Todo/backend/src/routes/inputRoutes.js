const express = require('express');

const inputController = require('../controllers/inputController');

function inputRouter(Input) {
  const router = express.Router();
  const input = inputController(Input);

  router.route('/')
    .get(input.getMethod);

  return router;
}

module.exports = inputRouter;
