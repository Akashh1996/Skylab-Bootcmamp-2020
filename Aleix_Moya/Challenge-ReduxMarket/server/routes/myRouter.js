const express = require('express');
const listController = require('../controllers/listController');
const datasheetController = require('../controllers/datasheetController');

const router = express.Router();

function myRouter(Wargear) {
  const listWargear = listController(Wargear);
  const listDatasheet = datasheetController(Wargear);

  router.route('/list')
    .get(listWargear.getMethod)
    .put(listWargear.putMethod);

  router.route('/datasheet')
    .get(listDatasheet.getMethod)
    .put(listDatasheet.putMethod);
  return router;
}

module.exports = myRouter;
