function reservationsController(Reservation) {
  function getMethod(req, res) {
    const query = {};

    Reservation.find(query, (errorFindReservations, reservations) => {
      if (errorFindReservations) {
        res.send(errorFindReservations);
      } else {
        res.json(reservations);
      }
    });
  }
  function postMethod(req, res) {
    const query = req.body;
    Reservation.create(query, (errorFindReservations, reservations) => {
      if (errorFindReservations) {
        res.send(errorFindReservations);
      } else {
        res.json(reservations);
      }
    });
  }
  return {
    getMethod, postMethod,
  };
}

module.exports = reservationsController;
