const express = require('express');

function routes() {
  const listRouter = express.Router();
  listRouter.route('/');
  return listRouter;
}

module.exports = routes;
