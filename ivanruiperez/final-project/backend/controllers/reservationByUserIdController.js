/* eslint-disable no-underscore-dangle */
function reservationByUserIdController(Reservation) {
  function getMethod(req, res) {
    const query = { userId: req.query.userId };

    Reservation.find(query, (errorFindReservation, reservation) => {
      if (errorFindReservation) {
        res.send(errorFindReservation);
      } else {
        res.json(reservation);
      }
    });
  }
  function deleteMethod(req, res) {
    const query = { _id: req.query.userId };

    Reservation.findOneAndDelete(query, (errorFindReservation, deleteReservation) => {
      if (errorFindReservation) {
        res.send(errorFindReservation);
      } else {
        res.json(deleteReservation);
      }
    });
  }

  return {
    getMethod, deleteMethod,
  };
}

module.exports = reservationByUserIdController;
