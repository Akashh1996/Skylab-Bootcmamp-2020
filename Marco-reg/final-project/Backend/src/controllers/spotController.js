function spotController(spot) {
  function getMethod(req, res) {
    const { spotId } = req.params;

    spot.findById(spotId, (errorFindSpot, spotData) => (errorFindSpot
      ? res.send(errorFindSpot)
      : res.send(spotData)));
  }

  return { getMethod };
}

module.exports = spotController;
