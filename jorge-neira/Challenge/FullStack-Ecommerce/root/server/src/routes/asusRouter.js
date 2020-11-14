const express = require('express');
const dataJson = require('../../api/ecommerce.json');

function asusRouter() {
  const router = express.Router();

  router.route('/').get((req, res) => {
    res.json(dataJson);
  });

  return router;
}

module.exports = asusRouter;
