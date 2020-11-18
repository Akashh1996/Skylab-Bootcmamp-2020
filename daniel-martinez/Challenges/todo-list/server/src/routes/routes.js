const express = require('express');
const listController = require('../controllers/listController');

function routes(Tvshows) {
  const router = express.Router();
  const list = listController(Tvshows);

  router.route('/tvshows')
    .get(list.getMethod)
    .put(list.putMethod)
    .delete(list.deleteMethod);

  return router;
}

module.exports = routes;
