const express = require('express');
const detailController = require('../controllers/detailController');

function routes(list) {
  const detailRouter = express.Router();
  const detail = detailController(list);
  detailRouter.route('/')
    .get(detail.getMethod);

  return detailRouter;
}

module.exports = routes;
