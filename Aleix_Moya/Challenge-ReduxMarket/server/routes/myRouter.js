const express = require('express');
const listController = require('../controllers/listController');

function myRouter(Wargear) {
  const router = express.Router();
  const listWargear = listController(Wargear);

  router.route('/list')
    .get(listWargear.getMethod)
    .put(listWargear.putMethod);

  return router;
}

module.exports = myRouter;
