const express = require('express');
const productsListController = require('../controllers/productsListController');

function LaptopsRouter(Laptops) {
  const router = express.Router();
  const products = productsListController(Laptops);

  router.route('/')
    .get(products.getMethod);

  return router;
}

module.exports = LaptopsRouter;
