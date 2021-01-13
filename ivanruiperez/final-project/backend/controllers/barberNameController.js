function barberNameController(Barber) {
  function getMethod(req, res) {
    const query = { name: req.query.name };

    Barber.findOne(query, (errorFindBarbers, barbers) => {
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

module.exports = barberNameController;
