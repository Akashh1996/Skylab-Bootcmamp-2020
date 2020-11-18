function listController(Wargear) {
  function getMethod(req, res) {
    const query = {};
    Wargear.find(query, (errorFindWargear, simplecollections) => {
      if (errorFindWargear) {
        res.send(errorFindWargear);
      }
      res.json(simplecollections);
    });

  }
  function putMethod(req, res) {
    Wargear.addToCarrito(req.body);

    res.json(Wargear.getWargear());
  }
  return {
    getMethod, putMethod,
  };
}

module.exports = listController;
