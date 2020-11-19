/* eslint-disable linebreak-style */
const express = require('express');
const listController = require('../controller/listController');

function listRouter(List) {
  const router = express.Router();
  const list = listController(List);

  router.route('/').get(list.getMethod).post(list.postMethod).delete(list.deleteMethod);

  return router;
}

module.exports = listRouter;
