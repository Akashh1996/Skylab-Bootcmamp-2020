const express = require('express');
const reservationsController = require('../controllers/reservationsController');
const reservationByUserIdController = require('../controllers/reservationByUserIdController');

function reservationRouter(Reservation) {
  const router = express.Router();
  const reservations = reservationsController(Reservation);
  const userId = reservationByUserIdController(Reservation);

  router.route('/')
    .get(reservations.getMethod)
    .post(reservations.postMethod)
    .put(userId.getMethod)
    .delete(userId.deleteMethod);

  return router;
}

module.exports = reservationRouter;
