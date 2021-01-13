const express = require('express');
const barbersController = require('../controllers/barbersController');
const barberNameController = require('../controllers/barberNameController');

function barberRouter(Barber) {
  const router = express.Router();
  const barbers = barbersController(Barber);
  const barberName = barberNameController(Barber);

  router.route('/')
    .get(barbers.getMethod)
    .put(barberName.getMethod);
  return router;
}

module.exports = barberRouter;
