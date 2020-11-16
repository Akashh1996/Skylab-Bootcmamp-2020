const express = require('express');
const listController = require('../controllers/listController');

const router = express.Router();

function myRouter(Wargear) {
  const listWargear = listController(Wargear);

  router.route('/')
    .get(listWargear.getMethod)
    .put(listWargear.putMethod);

  return router;
}

module.exports = myRouter;
