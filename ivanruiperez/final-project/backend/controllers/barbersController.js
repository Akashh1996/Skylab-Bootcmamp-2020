function barbersController(Barber) {
  function getMethod(req, res) {
    const query = {};
    Barber.find(query, (errorFindBarbers, barbers) => {
      if (errorFindBarbers) {
        res.send(errorFindBarbers);
      } else {
        res.json(barbers);
      }
    });
  }

  return {
    getMethod,
  };
}

module.exports = barbersController;
